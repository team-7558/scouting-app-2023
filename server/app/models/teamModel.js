module.exports = mongoose => {
    const Team = mongoose.model(
      "FOPCteam",
      mongoose.Schema(
        {
            // PUT WHATEVER TEAM DATA WE NEED IN HERE !!! 
            teamNum: Number,
            modeCommunity: Boolean,
            modeAutoCS: String,
            avgGpTotal: Number,
            avgGpAutoTotal: Number,
            avgGpTeleopTotal: Number,
            avgGpAutoScore: Number,
            avgGpTeleopScore: Number,
            avgGpTotalScore: Number,
            modeAutoStartPos: String,
            modePickupType: String,
            modeAutoPickupPos: String,
            avgEndgameStartTime: Number,
            avgEstCycleTime: Number,
            modeEndgameCS: String,
            modeDefence: String,
            modeDefenceType: String,
            modeCSCycle: Boolean,
            modeWin: Boolean,
        },
        { timestamps: true },
        { typeKey: '$type' }
      )
    );
  
    return Team;
  };