import tornado.ioloop
import tornado.web
from tornado.web import StaticFileHandler
from tornado.options import define, options
import json, ystockquote, unicodedata

define("port", default=8888, help="run on the given port", type=int)

def normalize(param1):
    query = unicodedata.normalize('NFKD', param1).encode('ascii','ignore')
    splitArray = query.split()
    query = " ".join(splitArray)
    return query

class RootHandler(tornado.web.RequestHandler):
    def get(self, param1):
        self.render('index.html')

class APIHandler(tornado.web.RequestHandler):
    def get(self, param1):
        query = normalize(param1)
        endResult = ystockquote.get_all(query)
        if endResult["volume"] is not "0":
            self.write(tornado.escape.json_encode(endResult))
        else:
            self.write(tornado.escape.json_encode({"Result": "N/A"}))

class HomepageHandler(tornado.web.RequestHandler):
    def get(self):
        endResult = ystockquote.get_all('^IXIC')
        self.write(tornado.escape.json_encode(endResult))

def main():
    tornado.options.parse_command_line()
    app = tornado.web.Application([
        (r"/(?P<param1>[^\/]+)?", RootHandler),
        (r"/s/homepage.json", HomepageHandler),
        (r"/api/(?P<param1>[^\/]+)?.json", APIHandler),
        (r"/lib/(.+)", StaticFileHandler, dict(path='lib')),
    ])
    app.listen(options.port)
    print "Application ready and listening @ %i" % (options.port)
    tornado.ioloop.IOLoop.instance().start()

if __name__ == "__main__":
    main()
