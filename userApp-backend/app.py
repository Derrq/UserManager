from tornado.web import Application, RequestHandler
from tornado.ioloop import IOLoop
import json
import psycopg2
import psycopg2.extras
from psycopg2.extras import RealDictCursor

conn = psycopg2.connect( database="userMgt", user="postgres", password ="admin", host="localhost", port=5432)
cur = conn.cursor(cursor_factory=RealDictCursor)

class UserList(RequestHandler):
  def set_default_headers(self):
    self.set_header("Content-Type", "application/json")
    self.set_header("Access-Control-Allow-Origin", "*")
    self.set_header("Access-Control-Allow-Headers", "Content-type")
    self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PATCH, PUT, DELETE')

  def options(self):
    # no body
    self.set_status(204)
    self.finish()

  def get(self):
    print("Clearing all users records")
    query= "SELECT * FROM user_table"
    cur.execute("ROLLBACK")
    conn.commit()
    cur.execute(query)
    newusers=cur.fetchall()
    dumpedString= json.dumps(newusers,default=str)
    print(dumpedString)
    self.write(dumpedString)
    #Function to delete all existing users
  def delete(self):
    print("Clearing all users records")
    query= "DELETE FROM user_table;"
    cur.execute(query)
    conn.commit()    
    self.write('Table successfully cleared! ')
    
class UserItem(RequestHandler):
  #Set headers
  def set_default_headers(self):
    self.set_header("Content-Type", "application/json")
    self.set_header("Access-Control-Allow-Origin", "*")
    self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PATCH, PUT, DELETE')
    self.set_header("Access-Control-Allow-Headers", "Content-type, Accept, Origin, X-PINGOTHER") 
    self.set_header("Access-Control-Max-Age", "86400") 

  def get(self, user_id=None):
    print("Retrieving User Record")
    user_id = self.get_arguments('user_id')
    query= "SELECT * FROM user_table WHERE id =%s"
    cur.execute(query, user_id)
    queriedUser=cur.fetchall()
    if queriedUser == []:
      print('Invalid User!')
      self.write('User does not exist')
    else :
      queriedUser = json.dumps(queriedUser,default=str)
      conn.commit()
      print('User Retrieved')
      self.write(queriedUser)
      print(queriedUser)


  def options(self):
    # no body
    self.set_status(204)
    self.finish()

  #Function to post new users
  def post(self):
    self.set_default_headers()
    print("Inserting User Record")

    #get body payload
    request_data = json.loads(self.request.body) 
    if request_data['first_name'] == '':
      print("Invalid input!")
      self.write("Invalid Input")
    else:
      #assign value from request to variables
      first_name = request_data['first_name']
      last_name = request_data['last_name']
      user_name = request_data['user_name']
      date_of_birth = request_data['date_of_birth']

      #run insert query
      query= "INSERT INTO user_table ( first_name, last_name, user_name, date_of_birth) VALUES(%s, %s, %s, %s)"
      cur.execute(query, ( first_name, last_name, user_name, date_of_birth))
      conn.commit()
      self.write('Submitted to db successfully')
  
  #Function to update existing users by ID
  def put(self, user_id=None):
    print("Updating User Record")
    user_id= json.loads(self.get_argument("user_id"))

    #get body payload
    request_data = json.loads(self.request.body) 
    
    #assign value from request to variables
    first_name = request_data['first_name']
    last_name = request_data['last_name']
    user_name = request_data['user_name']
    date_of_birth = request_data['date_of_birth']

    #run update query
    query= "UPDATE user_table SET first_name=%s, last_name=%s, user_name=%s, date_of_birth=%s WHERE id =%s"
    cur.execute(query, ( first_name, last_name, user_name, date_of_birth, user_id))
    conn.commit()
    self.write('Updated user successfully')
  
  #Function to delete users by ID
  def delete(self, user_id=None):
    print("Deleting User Record")
    user_id = self.get_arguments('user_id')

    #run delete query
    query= "DELETE FROM user_table WHERE id =%s"
    cur.execute(query,user_id)
    conn.commit()    
    self.write('User successfully deleted! ')

def make_app():
  urls = [
      (r"/", UserList),
      (r"/api/delete/", UserList),
      (r"/api/user/([0-9]+)/.*", UserItem),
      (r"/api/user/add/", UserItem),
      (r"/api/user/update/([0-9]+)/.*", UserItem),
      (r"/api/user/delete/([0-9]+)/.*", UserItem),
  ]
  return Application(urls, debug=True)
  
if __name__ == '__main__':
    app = make_app()
    app.listen(3000)
    IOLoop.instance().start()