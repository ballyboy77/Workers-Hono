import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c:any) => {
  return c.text('Hello Hono! => /signin')
})

async function authMiddleware(c:any,next:any) {
  if (c.req.header("Authorization")) {
    await next()
    
  }
  else{
    return c.text("You don't have access, tip ==> (You Postman API)")
  }
  
}

app.get('/signin',authMiddleware,async (c:any)=>{
  return c.text("You are Succesfully Logged In!")
})

export default app
