import unittest
import os
import sys
from flask import Flask

sys.path.append(os.path.abspath('../../'))
from app import index
import models

INPUT = 'index.html'
EXPECTED = 'index.html'


class indexTestCase(unittest.TestCase):
    def setUp(self):
        self.success_test_params = [
            {
                INPUT: "index.html" ,
                EXPECTED: "index.html" ,
            },
        ]

    def test_success(self):
        for test in self.success_test_params:
            def create_app():
                app = Flask(__name__)

                with app.app_context():
                

                
                    print(index(test[INPUT]))
                    actual = (index(test[INPUT]))
                    expected = test[EXPECTED]
                    print(expected)
                    self.assertEqual(actual, expected)
            
            

if __name__ == '__main__':
    unittest.main()
