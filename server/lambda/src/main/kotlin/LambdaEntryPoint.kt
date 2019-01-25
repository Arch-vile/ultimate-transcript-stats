package com.nakoradio.utranscript


import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import org.apache.commons.text.similarity.JaroWinklerDistance
import java.io.File
import java.io.InputStream
import java.io.OutputStream

data class HandlerInput(val transcript: String, val players: String)
data class HandlerOutput(val playByPlay: List<String>)

fun main(args: Array<String>) {
    println("Give me the transcript and player file")
    val m = Main()
    val output = m.process(File(args[0]).readText(), File(args[1]).readText())
    println(output.playByPlay)
}

class Main {

    val mapper = jacksonObjectMapper()

    fun process(transcript: String, players: String): HandlerOutput {
        val transcript = sanitizeInput(transcript)
        val players = extractPlayers(players)
        val keyWords = listOf("maali", "pois")
        val matched = matchDictionaries(transcript, listOf(players, keyWords))
        return HandlerOutput(matched)
    }

    // Called on AWS lambda
    fun handler(input: InputStream, output: OutputStream): Unit {
        val inputObj = mapper.readValue<HandlerInput>(input)
        mapper.writeValue(output, process(inputObj.transcript, inputObj.players))
    }
}

fun sanitizeInput(input: String) =
        input.split("\n")
                .flatMap { it.split("\\s".toRegex()) }
                .flatMap { it.split("-") }
                .map { it.trim() }
                .filter { it.isNotEmpty() }
                .map { it.toLowerCase() }

fun extractPlayers(players: String) =
        players.split("\n")
                .flatMap { it.split("\\s".toRegex()) }
                .flatMap { it.split(",") }
                .map { it.trim() }
                .filter { it.isNotEmpty() }
                .map { it.toLowerCase() }


sealed class Event {
    data class Pass(val thrower: String, val success: Boolean) : Event()
    data class Goal(val thrower: String, val success: Boolean) : Event()
}

fun matchDictionaries(transcript: List<String>, listOf: List<List<String>>): List<String> {

    val dictionary = listOf.flatMap { it }
    return transcript.map {
        bestMatch(it, dictionary)
    }

}

fun bestMatch(word: String, dictionary: List<String>): String {
    val similarity = JaroWinklerDistance()
    val m = dictionary
            .map { Pair(it, similarity.apply(it, word)) }
            .sortedBy { it.second }
            .last()

    if (m.second < 0.7) {
        println("Not good enough match for '${word}' best match was '${m.first}' with score ${m.second}")
        return "XXXXXX"
    }

    return m.first
}