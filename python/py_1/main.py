import json
import os

#added class DB
class BaseDG(object) :
    def __init__(self, location):
        self.location = os.path.expanduser(location)
        self.load(self.location)    
    def load(self, location) :
        if os.path.exists(location):
            self._load()
        else:
            self.db = {}
        return True 
    def _load(self):
        self.db = json.load(open(self.location, "r")) 
    def dumpdb(self):
        try:
            json.dump(self.db , open(self.location, "w+"))
            return True
        except: 
            return False

    def load(self, location):
        if os.path.exists(location):
            self._load()
        else:
            self.db = {}
            return True

    def _load(self): 
        self.db  = json.load(open(self.location, "r"))

    def dumpdb(self):
        try: 
            json.dump(self.db, open(self.location, "w+"))
            return True
        except: 
            return False

# added function of add values
    def set(self, key, value):
        try: 
            self.db[str(key)] = value
            self.dumpdb()
            return True
        except Exception as e:
            print("[x] Error saving values to database: "+ str(e))
            return False
    def get(self, key):
        try:
            return self.db[key]
        except KeyError:
            print("No value can be found for "+str(key))
            return False 
    def delete(self, key):
        if not key in self.db:
            return False
        del self.db [key]
        self.dumpdb()
        return True

    def resetdb(self):
        self.db={}
        self.dumpdb()
        return True

db = BaseDG("./mydb.db")

while True:
    cmd = input("Input: 1 = Add, 2 = Delete, 3 = Get, 4 = resetDB\n")
    if (cmd == "1"):
        key = input("id: ")
        value = input("value: ")
        if (not key and not value):
            print("error uncorrect id or value")
        elif(len(key) >= 15 and len(value) >= 15):
            print("too much")
        else: 
            db.set(key, value)
        

    elif(cmd == "2"):
        key = input("choice id what you want to delete: ")
        db.delete(key)


    elif(cmd == "3"):
        key = input("choice id what you to get info")
        get = db.get(key)
        print(get)

    elif(cmd == "4"):
        confirm = input("do you really sure? [y/n]")
        if (confirm == "y"):
            db.resetdb()
            print("database is clear!")
        elif(confirm == "n"):
            print("reset cancelled")
            
    else:
        print("uncorrect инпут")
    



# profit