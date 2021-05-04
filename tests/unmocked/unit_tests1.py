import unittest
import os
import sys

sys.path.append(os.path.abspath('../../'))
from app import mock_class
import models


INPUT = "classs"
EXPECTED = 'expected'


class mockClassTest(unittest.TestCase):
    def setUp(self):
        self.success_test_params = [
            {
                INPUT: {
                    'class': 'CS490',
                },
                EXPECTED: {
                    'class': "CS490"
                }
                    
            },
        ]

    def test_success(self):
        for test in self.success_test_params:
            actual = (mock_class(test[INPUT]["class"]))
            expected = test[EXPECTED]
            self.assertNotEqual(actual, expected)


if __name__ == '__main__':
    unittest.main()
