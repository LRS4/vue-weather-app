<template>
  <div>
    <div v-for="weatherData in weatherDataList" :key="weatherData.id" class="weather-data">
      <div class="weather-stats">
        <h1>{{weatherData.location}}</h1>
        <div>
          <span>{{weatherData.time}}</span>
        </div>
        <div class="weather-temp">
            <span>{{weatherData.temp}}°</span>
        </div>
      </div>
      <div class="weather-icon">
        <img v-on:click="alert('hello')" :src="`https://www.metaweather.com/static/img/weather/${weatherData.abbr}.svg`">
      </div>
    </div>
  </div>
</template>

<script>
/*
Even though we are fetching the data from a file, we do the exact same thing when fetching data from an URL.
Just replace “weather.json” with the API URL.

Fetch has a few shortcomings. Like we demonstrated earlier with fetch, we needed to chain two then functions to the call the get the data. 
This is simplified with axios. Let’s replace our current fetch function with axios.
*/
import axios from 'axios';

export default {
    name: 'WeatherItem',
    data() {
        return {
            id: this.$route.params.id,
            weatherDataList: {}
        };
    },
    created() {
        axios.get('../weather.json')
        .then(response => {
            const items = response.data
            this.weatherDataList = items.filter(item => item.id == this.id)
        })
    }
}
</script>

<style scoped>

.weather-icon {
  flex-grow: 1;
}

.weather-stats .location {
  font-size: 30px;
}

.weather-temp {
  flex-grow: 1;
  font-size: 35px;
}

img {
  width: 200px;
  margin-top: 20px;
}

button {
  padding: 10px;
  background-color: #1aa832;
  color: white;
  border: 1px solid #ccc;
}
</style>