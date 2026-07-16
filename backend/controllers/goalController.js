const { db } = require("../config/firebase");


// Create Goal
const createGoal = async (req, res) => {

  try {

    const { title, targetDate, description } = req.body;

    const uid = req.user.uid;


    if (!title) {

      return res.status(400).json({
        success: false,
        message: "Goal title is required",
      });

    }


    const goalRef = await db.collection("goals").add({

      uid,
      title,
      description: description || "",
      targetDate: targetDate || "",
      progress: 0,
      createdAt: new Date(),

    });



    res.status(201).json({

      success: true,
      message: "Goal created successfully",
      goalId: goalRef.id,

    });



  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message,

    });

  }

};





// Get Goals
const getGoals = async (req, res) => {

  try {

    const uid = req.user.uid;


    const snapshot = await db
      .collection("goals")
      .where("uid", "==", uid)
      .get();



    const goals = [];


    snapshot.forEach((doc) => {

      goals.push({

        id: doc.id,
        ...doc.data(),

      });

    });



    res.json({

      success: true,
      goals,

    });



  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message,

    });

  }

};





// Update Goal Progress
const updateGoal = async (req, res) => {

  try {

    const { id } = req.params;


    await db.collection("goals").doc(id).update({

      ...req.body,
      updatedAt: new Date(),

    });



    res.json({

      success: true,
      message: "Goal updated successfully",

    });



  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message,

    });

  }

};





// Delete Goal
const deleteGoal = async (req, res) => {

  try {

    const { id } = req.params;


    await db.collection("goals").doc(id).delete();



    res.json({

      success: true,
      message: "Goal deleted successfully",

    });



  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message,

    });

  }

};





module.exports = {

  createGoal,
  getGoals,
  updateGoal,
  deleteGoal,

};