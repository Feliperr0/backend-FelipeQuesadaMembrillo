
import "dotenv/config.js"
import '../../config/database.js'
import Processor from '../Processor.js'

let processors = [
    { name: "Intel Core i9-11900K", cores: 8, threads: 16, baseClock: 3.5, boostClock: 5.3, manufacturer: "Intel", architecture: "Rocket Lake", socket: "LGA1200", powerConsumption: 125, releaseDate: new Date(2021, 2, 30) },
    { name: "AMD Ryzen 9 5900X", cores: 12, threads: 24, baseClock: 3.7, boostClock: 4.8, manufacturer: "AMD", architecture: "Zen 3", socket: "AM4", powerConsumption: 105, releaseDate: new Date(2020, 10, 5) },
    { name: "Intel Core i7-10700K", cores: 8, threads: 16, baseClock: 3.8, boostClock: 5.1, manufacturer: "Intel", architecture: "Comet Lake", socket: "LGA1200", powerConsumption: 125, releaseDate: new Date(2020, 4, 30) },
    { name: "AMD Ryzen 7 5800X", cores: 8, threads: 16, baseClock: 3.8, boostClock: 4.7, manufacturer: "AMD", architecture: "Zen 3", socket: "AM4", powerConsumption: 105, releaseDate: new Date(2020, 10, 5) },
    { name: "Intel Core i5-10600K", cores: 6, threads: 12, baseClock: 4.1, boostClock: 4.8, manufacturer: "Intel", architecture: "Comet Lake", socket: "LGA1200", powerConsumption: 125, releaseDate: new Date(2020, 4, 30) },
    { name: "AMD Ryzen 5 5600X", cores: 6, threads: 12, baseClock: 3.7, boostClock: 4.6, manufacturer: "AMD", architecture: "Zen 3", socket: "AM4", powerConsumption: 65, releaseDate: new Date(2020, 10, 5) },
    { name: "Intel Core i9-10900K", cores: 10, threads: 20, baseClock: 3.7, boostClock: 5.3, manufacturer: "Intel", architecture: "Comet Lake", socket: "LGA1200", powerConsumption: 125, releaseDate: new Date(2020, 4, 30) },
    { name: "AMD Ryzen 9 5950X", cores: 16, threads: 32, baseClock: 3.4, boostClock: 4.9, manufacturer: "AMD", architecture: "Zen 3", socket: "AM4", powerConsumption: 105, releaseDate: new Date(2020, 10, 5) },
    { name: "Intel Core i7-11700K", cores: 8, threads: 16, baseClock: 3.6, boostClock: 5.0, manufacturer: "Intel", architecture: "Rocket Lake", socket: "LGA1200", powerConsumption: 125, releaseDate: new Date(2021, 2, 30) },
    { name: "AMD Ryzen 7 3700X", cores: 8, threads: 16, baseClock: 3.6, boostClock: 4.4, manufacturer: "AMD", architecture: "Zen 2", socket: "AM4", powerConsumption: 65, releaseDate: new Date(2019, 6, 7) }
  ];
  
Processor.insertMany(processors)