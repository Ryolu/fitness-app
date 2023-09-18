import React, { useState } from "react";
import {StyleSheet, View, Text, TextInput, Button, Image, TouchableWithoutFeedback, Keyboard} from "react-native";
import { useAppContext } from "./context";

const IPPTCalculatorScreen = () => {
  const { addIPPTRecord } = useAppContext();

  const [age, setAge] = useState("");
  const [pushUps, setPushUps] = useState("");
  const [sitUps, setSitUps] = useState("");
  const [runTime, setRunTime] = useState("");
  const [score, setScore] = useState(0);

  const calculateIPPTScore = () => {
    // Convert input values to numbers
    let ageGroup = 0;
    const ageVal = parseFloat(age);
    const pushUpsCount = parseFloat(pushUps);
    const sitUpsCount = parseFloat(sitUps);
    const runTimeInSeconds = parseFloat(runTime);

    // Perform IPPT score calculation logic
    let totalScore = 0;
    if (!isNaN(ageVal)) {
      ageGroup = Math.ceil((ageVal - 21) / 3);
    }
    console.log("Age group is %i", ageGroup);

    // Calculate Push-Ups score
    if (!isNaN(pushUpsCount)) {
      if (ageGroup < 8) {
        if (pushUpsCount >= 60 - ageGroup) {
          totalScore += 25;
        } else if (pushUpsCount > 39 - ageGroup) {
          totalScore += Math.ceil((pushUpsCount - (39 - ageGroup)) / 4) + 19;
        } else if (pushUpsCount > 27 - ageGroup) {
          totalScore += Math.ceil((pushUpsCount - (27 - ageGroup)) / 3) + 15;
        } else if (pushUpsCount > 25 - ageGroup) {
          totalScore += 15;
        } else if (pushUpsCount > 18 - ageGroup) {
          totalScore += pushUpsCount - 11 - ageGroup;
        } else if (pushUpsCount > 15 - ageGroup) {
          totalScore += (pushUpsCount - 15 - ageGroup) * 2;
        } else if (pushUpsCount == 15 - ageGroup) {
          totalScore += 1;
        }
      } else if (ageGroup == 8) {
        if (pushUpsCount >= 51) {
          totalScore += 25;
        } else if (pushUpsCount > 34) {
          totalScore += Math.ceil((pushUpsCount - 34) / 4) + 20;
        } else if (pushUpsCount > 19) {
          totalScore += Math.ceil((pushUpsCount - 19) / 3) + 15;
        } else if (pushUpsCount > 17) {
          totalScore += 15;
        } else if (pushUpsCount > 11) {
          totalScore += pushUpsCount - 3;
        } else if (pushUpsCount > 7) {
          totalScore += (pushUpsCount - 7) * 2;
        } else if (pushUpsCount == 7) {
          totalScore += 1;
        }
      } else if (ageGroup == 9) {
        if (pushUpsCount >= 49) {
          totalScore += 25;
        } else if (pushUpsCount > 36) {
          totalScore += Math.ceil((pushUpsCount - 36) / 4) + 21;
        } else if (pushUpsCount > 18) {
          totalScore += Math.ceil((pushUpsCount - 18) / 3) + 15;
        } else if (pushUpsCount > 16) {
          totalScore += 15;
        } else if (pushUpsCount > 9) {
          totalScore += pushUpsCount - 2;
        } else if (pushUpsCount > 6) {
          totalScore += (pushUpsCount - 6) * 2;
        } else if (pushUpsCount == 6) {
          totalScore += 1;
        }
      } else if (ageGroup == 10) {
        if (pushUpsCount >= 47) {
          totalScore += 25;
        } else if (pushUpsCount > 38) {
          totalScore += Math.ceil((pushUpsCount - 38) / 4) + 22;
        } else if (pushUpsCount > 17) {
          totalScore += Math.ceil((pushUpsCount - 17) / 3) + 15;
        } else if (pushUpsCount > 15) {
          totalScore += 15;
        } else if (pushUpsCount > 8) {
          totalScore += pushUpsCount - 1;
        } else if (pushUpsCount > 5) {
          totalScore += (pushUpsCount - 5) * 2;
        } else if (pushUpsCount == 5) {
          totalScore += 1;
        }
      } else if (ageGroup == 11) {
        if (pushUpsCount >= 45) {
          totalScore += 25;
        } else if (pushUpsCount > 40) {
          totalScore += Math.ceil((pushUpsCount - 40) / 4) + 23;
        } else if (pushUpsCount > 16) {
          totalScore += Math.ceil((pushUpsCount - 16) / 3) + 15;
        } else if (pushUpsCount > 14) {
          totalScore += 15;
        } else if (pushUpsCount > 7) {
          totalScore += pushUpsCount;
        } else if (pushUpsCount > 4) {
          totalScore += (pushUpsCount - 4) * 2;
        } else if (pushUpsCount == 4) {
          totalScore += 1;
        }
      } else if (ageGroup == 12) {
        if (pushUpsCount >= 42) {
          totalScore += 25;
        } else if (pushUpsCount > 29) {
          totalScore += Math.ceil((pushUpsCount - 29) / 3) + 20;
        } else if (pushUpsCount > 27) {
          totalScore += Math.ceil((pushUpsCount - 27) / 2) + 19;
        } else if (pushUpsCount > 15) {
          totalScore += Math.ceil((pushUpsCount - 15) / 3) + 15;
        } else if (pushUpsCount > 13) {
          totalScore += 15;
        } else if (pushUpsCount > 6) {
          totalScore += pushUpsCount + 1;
        } else if (pushUpsCount > 3) {
          totalScore += (pushUpsCount - 3) * 2;
        } else if (pushUpsCount == 3) {
          totalScore += 1;
        }
      } else if (ageGroup == 13) {
        if (pushUpsCount >= 40) {
          totalScore += 25;
        } else if (pushUpsCount > 30) {
          totalScore += Math.ceil((pushUpsCount - 30) / 3) + 21;
        } else if (pushUpsCount > 26) {
          totalScore += Math.ceil((pushUpsCount - 26) / 2) + 18;
        } else if (pushUpsCount > 14) {
          totalScore += Math.ceil((pushUpsCount - 15) / 3) + 15;
        } else if (pushUpsCount > 12) {
          totalScore += 15;
        } else if (pushUpsCount > 5) {
          totalScore += pushUpsCount + 2;
        } else if (pushUpsCount > 2) {
          totalScore += (pushUpsCount - 2) * 2;
        } else if (pushUpsCount == 2) {
          totalScore += 1;
        }
      }
    }
    console.log(totalScore);

    // Calculate Sit-Ups score
    if (!isNaN(sitUpsCount)) {
      if (ageGroup < 8) {
        if (sitUpsCount >= 60 - ageGroup) {
          totalScore += 25;
        } else if (sitUpsCount > 39 - ageGroup) {
          totalScore += Math.ceil((sitUpsCount - (39 - ageGroup)) / 4) + 19;
        } else if (sitUpsCount > 27 - ageGroup) {
          totalScore += Math.ceil((sitUpsCount - (27 - ageGroup)) / 3) + 15;
        } else if (sitUpsCount > 25 - ageGroup) {
          totalScore += 15;
        } else if (sitUpsCount > 18 - ageGroup) {
          totalScore += sitUpsCount - 11 - ageGroup;
        } else if (sitUpsCount > 15 - ageGroup) {
          totalScore += (sitUpsCount - 15 - ageGroup) * 2;
        } else if (sitUpsCount == 15 - ageGroup) {
          totalScore += 1;
        }
      } else if (ageGroup == 8) {
        if (sitUpsCount >= 51) {
          totalScore += 25;
        } else if (sitUpsCount > 34) {
          totalScore += Math.ceil((sitUpsCount - 34) / 4) + 20;
        } else if (sitUpsCount > 19) {
          totalScore += Math.ceil((sitUpsCount - 19) / 3) + 15;
        } else if (sitUpsCount > 17) {
          totalScore += 15;
        } else if (sitUpsCount > 11) {
          totalScore += sitUpsCount - 3;
        } else if (sitUpsCount > 7) {
          totalScore += (sitUpsCount - 7) * 2;
        } else if (sitUpsCount == 7) {
          totalScore += 1;
        }
      } else if (ageGroup == 9) {
        if (sitUpsCount >= 49) {
          totalScore += 25;
        } else if (sitUpsCount > 36) {
          totalScore += Math.ceil((sitUpsCount - 36) / 4) + 21;
        } else if (sitUpsCount > 18) {
          totalScore += Math.ceil((sitUpsCount - 18) / 3) + 15;
        } else if (sitUpsCount > 16) {
          totalScore += 15;
        } else if (sitUpsCount > 9) {
          totalScore += sitUpsCount - 2;
        } else if (sitUpsCount > 6) {
          totalScore += (sitUpsCount - 6) * 2;
        } else if (sitUpsCount == 6) {
          totalScore += 1;
        }
      } else if (ageGroup == 10) {
        if (sitUpsCount >= 47) {
          totalScore += 25;
        } else if (sitUpsCount > 38) {
          totalScore += Math.ceil((sitUpsCount - 38) / 4) + 22;
        } else if (sitUpsCount > 17) {
          totalScore += Math.ceil((sitUpsCount - 17) / 3) + 15;
        } else if (sitUpsCount > 15) {
          totalScore += 15;
        } else if (sitUpsCount > 8) {
          totalScore += sitUpsCount - 1;
        } else if (sitUpsCount > 5) {
          totalScore += (sitUpsCount - 5) * 2;
        } else if (sitUpsCount == 5) {
          totalScore += 1;
        }
      } else if (ageGroup == 11) {
        if (sitUpsCount >= 45) {
          totalScore += 25;
        } else if (sitUpsCount > 40) {
          totalScore += Math.ceil((sitUpsCount - 40) / 4) + 23;
        } else if (sitUpsCount > 16) {
          totalScore += Math.ceil((sitUpsCount - 16) / 3) + 15;
        } else if (sitUpsCount > 14) {
          totalScore += 15;
        } else if (sitUpsCount > 7) {
          totalScore += sitUpsCount;
        } else if (sitUpsCount > 4) {
          totalScore += (sitUpsCount - 4) * 2;
        } else if (sitUpsCount == 4) {
          totalScore += 1;
        }
      } else if (ageGroup == 12) {
        if (sitUpsCount >= 42) {
          totalScore += 25;
        } else if (sitUpsCount > 29) {
          totalScore += Math.ceil((sitUpsCount - 29) / 3) + 20;
        } else if (sitUpsCount > 27) {
          totalScore += Math.ceil((sitUpsCount - 27) / 2) + 19;
        } else if (sitUpsCount > 15) {
          totalScore += Math.ceil((sitUpsCount - 15) / 3) + 15;
        } else if (sitUpsCount > 13) {
          totalScore += 15;
        } else if (sitUpsCount > 6) {
          totalScore += sitUpsCount + 1;
        } else if (sitUpsCount > 3) {
          totalScore += (sitUpsCount - 3) * 2;
        } else if (sitUpsCount == 3) {
          totalScore += 1;
        }
      } else if (ageGroup == 13) {
        if (sitUpsCount >= 40) {
          totalScore += 25;
        } else if (sitUpsCount > 30) {
          totalScore += Math.ceil((sitUpsCount - 30) / 3) + 21;
        } else if (sitUpsCount > 26) {
          totalScore += Math.ceil((sitUpsCount - 26) / 2) + 18;
        } else if (sitUpsCount > 14) {
          totalScore += Math.ceil((sitUpsCount - 15) / 3) + 15;
        } else if (sitUpsCount > 12) {
          totalScore += 15;
        } else if (sitUpsCount > 5) {
          totalScore += sitUpsCount + 2;
        } else if (sitUpsCount > 2) {
          totalScore += (sitUpsCount - 2) * 2;
        } else if (sitUpsCount == 2) {
          totalScore += 1;
        }
      }
    }
    console.log(totalScore);

    // Calculate Run Time score
    if (!isNaN(runTimeInSeconds)) {
      if (ageGroup < 3) {
        if (runTimeInSeconds <= 510 + ageGroup * 10) {
          totalScore += 50;
        } else if (runTimeInSeconds <= 630 + ageGroup * 10) {
          totalScore += 50 - (runTimeInSeconds - (510 + ageGroup * 10)) / 10;
        } else if (runTimeInSeconds <= 710 + ageGroup * 10) {
          totalScore += 38 - (runTimeInSeconds - (630 + ageGroup * 10)) / 10;
        } else if (runTimeInSeconds <= 870 + ageGroup * 10) {
          totalScore += 34 - (runTimeInSeconds - (710 + ageGroup * 10)) / 10;
        } else if (runTimeInSeconds <= 960 + ageGroup * 10) {
          totalScore += 18 - (runTimeInSeconds - (870 + ageGroup * 10)) / 10;
        } else if (runTimeInSeconds <= 970 + ageGroup * 10) {
          totalScore += (runTimeInSeconds - (960 + ageGroup * 10)) / 10;
        }
      } else {
        // adjust the age group according to the new jump in numbers after the first 3 groups
        if (runTimeInSeconds < 550 + ageGroup * 10) {
          totalScore += 50;
        } else if (runTimeInSeconds <= 670 + ageGroup * 10) {
          totalScore += 50 - (runTimeInSeconds - (550 + ageGroup * 10)) / 10;
        } else if (runTimeInSeconds <= 750 + ageGroup * 10) {
          totalScore += 38 - (runTimeInSeconds - (670 + ageGroup * 10)) / 10;
        } else if (runTimeInSeconds <= 910 + ageGroup * 10) {
          totalScore += 34 - (runTimeInSeconds - (750 + ageGroup * 10)) / 10;
        } else if (runTimeInSeconds <= 1000 + ageGroup * 10) {
          totalScore += 18 - (runTimeInSeconds - (910 + ageGroup * 10)) / 10;
        } else if (runTimeInSeconds <= 1010 + ageGroup * 10) {
          totalScore += (runTimeInSeconds - (1000 + ageGroup * 10)) / 10;
        }
      }
    }

    console.log(totalScore);
    setScore(totalScore);

    const newRecord = {
      date: new Date().toLocaleDateString(),
      pushUps: pushUpsCount,
      sitUps: sitUpsCount,
      runTime: runTimeInSeconds,
      totalScore,
    };

    addIPPTRecord(newRecord);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>IPPT Calculator</Text>
        <Image
          source={{
            uri: "https://plus.unsplash.com/premium_photo-1666736570009-76c9551729bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtvdXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
          }}
          style={styles.image}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          onChangeText={(text) => setAge(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Push-Ups Count"
          onChangeText={(text) => setPushUps(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Sit-Ups Count"
          onChangeText={(text) => setSitUps(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="2.4km Run Time (seconds)"
          onChangeText={(text) => setRunTime(text)}
          keyboardType="numeric"
        />
        <View
          style={{ flexDirection: "row", height: 40, justifyContent: "center" }}
        >
          <Button title="Calculate Score" onPress={calculateIPPTScore} />
          <Text style={[styles.result, { marginLeft: "5%" }]}>
            Total Score: {score}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  result: {
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default IPPTCalculatorScreen;
