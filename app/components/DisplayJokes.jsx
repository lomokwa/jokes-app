import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DisplayJokes() {
  const [jokeList, setJokeList] = useState();
  const [showPunchline, setShowPunchline] = useState(false);
  const [index, setIndex] = useState(0);


  function shuffleArray(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    };
  
    return array;
  };

  useEffect(() => {
    fetch("https://api.sampleapis.com/jokes/goodJokes")
      .then(res => res.json())
      .then((data) => {
        setJokeList(shuffleArray(data))
      })
      .catch(alert)
  }, []);

  const handlePunchline = () => {
    setShowPunchline(true)
  };

  const handleNextJoke = () => {
    setShowPunchline(false)
    setIndex((prevIndex) => (prevIndex+1) % jokeList.length);
  };

  return (
    <View style={styles.body}>
      <Text>{jokeList && jokeList[index].setup}</Text>

      <View style={styles.buttons}>
        {!showPunchline
          ? <TouchableOpacity onPress={handlePunchline} style={styles.buttonStyle}>
              <Text style={styles.buttonText}>Show Punchline</Text>
            </TouchableOpacity>  
          : <Text style={styles.punchLine}>{showPunchline && jokeList[index].punchline}</Text>
        }

        <TouchableOpacity onPress={handleNextJoke} style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Next Joke</Text>
        </TouchableOpacity>
      </View>
    </View> 
  );
};

const styles = StyleSheet.create({
  buttons: {

    marginTop: 50
  },

  buttonText: {
    color: "#f1f1f1",
    fontSize: 20,
    textAlign: "center",
  },

  buttonStyle: {
    backgroundColor: "#6441a5",
    position: "fixed",
    padding: 15,
    marginTop: 15,
    marginBottom: 25,
    borderRadius: 5,
  },

  punchLine: {
    justifyContent: "center",
    color: "#f1f1f1"


  },
});
