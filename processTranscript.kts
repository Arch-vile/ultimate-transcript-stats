#!/usr/bin/env kscript

//KOTLIN_OPTS -J-Xmx1g
//DEPS com.offbytwo:docopt:0.6.0.20150202,log4j:log4j:1.2.14,org.apache.commons:commons-text:1.6

import org.apache.commons.text.similarity.JaroWinklerDistance
import java.io.File

val transcript = File(args[0]).useLines { it.toList() }
        .flatMap { it.split(" ") }
        .map { it.trim() }
        .filter { it.isNotEmpty() }
        .flatMap { it.split("-") }
        .map { it.toLowerCase() }

val players = File(args[1]).useLines { it.toList() }
        .flatMap { it.split(" ") }
        .flatMap { it.split(",") }
        .map { it.trim() }
        .filter { it.isNotEmpty() }
        .map { it.toLowerCase() }

val keyWords = listOf("maali", "pois")
val matched = matchDictionaries(transcript, listOf(players, keyWords))//.forEach { print(it + "\n") }


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

    if(m.second < 0.7) {
        throw Error("Not good enough match for '${word}' best match was '${m.first}' with score ${m.second}")
    }

    return m.first
}
