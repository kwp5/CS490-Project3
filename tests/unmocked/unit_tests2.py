import unittest
import os
import sys

sys.path.append(os.path.abspath('../../'))
from app import board_status
import models

INPUT = 'game_status'
EXPECTED = 'expected'


class BoardStatusTestCase(unittest.TestCase):
    def setUp(self):
        self.success_test_params = [
            {
                INPUT: {
                    'board': {
                        'board': ["X", "", "", "", "", "", "", "", ""]
                    },
                    'game_is_live': True,
                    'user': "Maamon",
                },
                EXPECTED: {
                    'board': ["X", "", "", "", "", "", "", "", ""]
                }
            },
            {
                INPUT: {
                    'board': {
                        'board': ["", "", "", "", "", "", "", "", ""]
                    },
                    'game_is_live': False,
                    'user': ""
                },
                EXPECTED: {
                    'game_is_live': False
                }
            },
        ]

    def test_success(self):
        for test in self.success_test_params:
            print(
                board_status(test[INPUT]['board'], test[INPUT]['game_is_live'],
                             test[INPUT]['user']))
            actual = (board_status(test[INPUT]['board'],
                                   test[INPUT]['game_is_live'],
                                   test[INPUT]['user']))
            expected = test[EXPECTED]
            print(expected)
            self.assertEqual(actual, expected)
            self.assertIsInstance(actual, dict)


if __name__ == '__main__':
    unittest.main()
