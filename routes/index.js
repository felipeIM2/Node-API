module.exports = function(server) {
 
 const { PrismaClient } = require('@prisma/client')
 const prisma = new PrismaClient() 

  server.get('/get', async (req, res) => {
    const allLogs = await prisma.user.findMany()
    res.status(200).json(allLogs)
  })
  
  server.post('/post', async (req, res) => {
    if (req.body.name) {
      const newLog = await prisma.user.create({
        data: {
          name:req.body.name
        },
      })
      res.status(200).json(`SUCCESS IN CREATING`)
    } else {
      res.status(404).json("ERROR CREATING")
    }
  })
}