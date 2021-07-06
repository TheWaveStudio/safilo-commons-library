const mongoose = require('mongoose')

export class MongoDb {
  constructor ({ uri }) {
    this.uri = uri
    this.client = null
  }

  async connect() {
    try {
      if (this.client) return this.client
  
      mongoose.set('useCreateIndex', true)
      mongoose.set('useFindAndModify', false)
      
      this.client = await mongoose.connect(this.uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .catch(error => console.log(error))

        mongoose.connection.on('connected', () => {
          console.log('Mongo Database connected')
        })

        mongoose.connection.on('disconnected', () => {
          console.log('Mongo Database disconnected')
        })

        process.on('SIGINT', () => {
          mongoose.connection.close(() => {
            console.log('Mongo Database disconnected through app termination')
            process.exit(0)
          })
        })
  
      return this.client
    } catch (err) {
      console.error('Database connection error:', err.message)
      process.exit(1)
    }
  }
}
