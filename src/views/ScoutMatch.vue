

<template>
    <div>
    
    </div>

    <div class="columns is-flex is-justify-content-center" style=" margin-top: 5%; margin-bottom: 5%">
        <button
            :class="[gameData.gameState === 'auto' ? 'button has-text-centered mx-2' : ' button is-dark has-text-centered mx-2']"
            @click="gameData.setGameState('auto')">Auto</button>

        <button
            :class="[gameData.gameState === 'teleop' ? 'button has-text-centered mx-2' : ' button is-dark has-text-centered mx-2']"
            @click="gameData.setGameState('teleop')">Teleop</button>

        <button
            :class="[gameData.gameState === 'endgame' ? 'button has-text-centered mx-2' : ' button is-dark has-text-centered mx-2']"
            @click="gameData.setGameState('endgame')">Endgame</button>


    </div>

    <div class="columns is-centered is-flex">
        <div class="column is-one-quarter py-5 px-3">
            <div class="tile is-parent is-vertical is-pulled-right is-centered card"
                v-show="gameData.gameState === 'teleop'">
                <label class="label is-size-6 has-text-centered">Pickup Type</label>
                <button :class="[gameData.pickupType === 'Ground' ? 'button is-medium tile is-primary has-text-centered my-1' : 'button is-medium tile is-dark has-text-centered my-1']" 
                        @click="gameData.setPickupType('Ground')">Ground</button>
                <button :class="[gameData.pickupType === 'Sub 1' ? 'button is-medium tile has-text-centered my-1' : 'button is-medium tile is-dark has-text-centered my-1']" 
                        @click="gameData.setPickupType('Sub 1')">Sub 1</button>
                <button :class="[gameData.pickupType === 'Sub 2' ? 'button is-medium tile is-danger has-text-centered my-1' : 'button is-medium tile is-dark has-text-centered my-1']" 
                        @click="gameData.setPickupType('Sub 2')">Sub 2</button>
                <label class="label is-size-6 my-2 has-text-centered">EG Start Time (#s left)</label>
                <div class="control"> 
                    <input class="input" type="number" placeholder="0" id="input2" @input="setEndgameStartTime()">
                </div>
            </div>
            <div id = "Pickup" class="tile is-parent is-vertical is-pulled-right is-centered card" v-show="gameData.gameState === 'auto'">
                <AutoPickupPos v-show="gameData.gameState === 'auto'"/>
            </div>

        </div>

        <div class=" column is-one-half box container">
            <Grid v-show="gameData.gameState == 'auto' || gameData.gameState === 'teleop'" />
            <Endgame v-show="gameData.gameState == 'endgame'" />
        </div>
        <!-- GP SCORED -->
        <div class="column is-one-quarter">
            <div id = "GPScored" class="tile is-parent is-vertical is-pulled-left is-centered card"
                v-show="gameData.gameState == 'auto' || gameData.gameState === 'teleop'">
                <label class="label is-size-6 has-text-centered">GP Scored:</label>
                <div class="buttons tile has-addons has-text-centered is-pulled-left ">
                    <button class=" button is-large is-dark column px-5 is-static" >{{ gameData.gpTotal }}</button>
                    <button @click="gameData.gpRemove()" class=" button is-large is-dark column px-5">-</button>
                </div>
                <label class="label is-size-6 has-text-centered mb-2">GP Total Score:</label>
                <div class="card has-text-centered mb-2">
                    <p class="title is-size-10 mb-3">{{ gameData.gpTotalScore }}</p>
                </div>

                <div class="tile is-vertical is-pulled-left is-centered"
                v-show=  "gameData.gameState === 'teleop'">
                <label class="label is-size-6 has-text-centered">Pickup:</label>
                <div class="buttons tile has-addons has-text-centered is-pulled-left ">
                    <button class=" button is-large is-dark column px-5 is-static" >{{ gameData.pickupTotal }}</button>
                    <button @click="gameData.removePickupType()" class=" button is-large is-dark column px-5">-</button>
                </div>
            </div>
                <Chargestation v-show="gameData.gameState == 'auto'"/>

        
                
            </div>
        </div>

    </div>

    <div class="columns is-centered is-flex">
        <div class="column is-one-quarter">
           
        </div>
        <div class="column is-one-half">
            <AutoStartPos v-show="gameData.gameState == 'auto'" class="is-centered"/>
        </div>
        <div class="column is-one-quarter">
            <Mobility v-show="gameData.gameState == 'auto'" class="is-pulled-left mb-3"/>
        </div>

    </div>

</template>
<script setup>
import Grid from '../components/Grid.vue'
import Chargestation from '../components/Chargestation.vue'
import Endgame from '../components/Endgame.vue'
import AutoStartPos from '../components/AutoStartPos.vue'
import AutoPickupPos from '../components/AutoPickupPos.vue'
import Mobility from '../components/Mobility.vue'

import { useGameDataStore } from '../stores/gameData'

const gameData = useGameDataStore();

function setEndgameStartTime() {
    const time = document.getElementById('input2').value;
   
    gameData.setEndgameStartTime(time);
}

const test = (msg) => {
    
}
</script>

<style scoped>
.box{
    padding-top:3.1%;
    padding-left: 1.5%;
    padding-right: 1.5%;
}
#GPScored{
    padding: 3%;
    position: absolute;
    top: -0.05%;
}
#Pickup{
    position: relative;
    top: -4%;
}
</style>