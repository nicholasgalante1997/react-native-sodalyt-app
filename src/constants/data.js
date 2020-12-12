export default {
    "stories": [
        {
            "story_id": 1,
            "story_title": "Mars Exploration",
            "story_thumbnail": " ",
            "icon": "md-planet",
            "questions": [
                {
                    "question_id": 1,
                    "order": 1,
                    "type": "MBTI",
                    "spec": "E/I",
                    "response_type": "binary",
                    "prompt": "You are on a solo mission to explore Mars with four android robots helping you. As you enter Mars’ atmosphere you spot some life form activity. Where do you decide to land your spacecraft?",
                    "answers": [
                        {
                            "question_id": 1,
                            "id": 1,
                            "raw_value": "I",
                            "value": 0,
                            "text": "I keep with my original landing plans"
                        },
                        {
                            "question_id": 1,
                            "id": 2,
                            "raw_value": "E",
                            "value": 1,
                            "text": "Close to the activity!"
                        }
                    ]

                },
                {
                    "question_id": 2,
                    "order": 2,
                    "type": "MBTI",
                    "spec": "S/N",
                    "response_type": "binary",
                    "prompt": "Great, you're on the ground safe! How do you set up your camp?",
                    "answers": [
                        {
                            "question_id": 2,
                            "id": 3,
                            "raw_value": "S",
                            "value": 0,
                            "text": "Start with step one just like I did during training."
                        },
                        {
                            "question_id": 2,
                            "id": 4,
                            "raw_value": "N",
                            "value": 1,
                            "text": "Talk with the Androids about it, and reference the manual as needed."
                        }
                    ]
                },
                {
                    "question_id": 3,
                    "order": 3,
                    "type": "Kearsey",
                    "spec": "Archetypes (4)",
                    "response_type": "categorical",
                    "prompt": "Great, camp is ready!  Now for some food, what's your choice?",
                    "answers": [
                        {
                            "question_id": 3,
                            "id": 5,
                            "raw_value": "The Artist/The Explorer",
                            "value": ["ISTP", "ISFP", "ESTP", "ESFP"],
                            "text": "Forage for food on Mars."
                        },
                        {
                            "question_id": 3,
                            "id": 6,
                            "raw_value": "The Guardian/The Sentinel",
                            "value": ["ISTJ", "ISFJ", "ESTJ", "ESFJ"],
                            "text": "Meal prep for the week."
                        },
                        {
                            "question_id": 3,
                            "id": 7,
                            "raw_value": "The Rationalist/The Analyst",
                            "value": ["INTJ", "INTP", "ENTJ", "ESFP"],
                            "text": "Stick to the ration guide."
                        },
                        {
                            "question_id": 3,
                            "id": 8,
                            "raw_value": "The Idealist/The Diplomat",
                            "value": ["INFJ", "INFP", "ENFJ", "ENFP"],
                            "text": "Celebration Feast"
                        }
                    ]
                }, 
                {
                    "question_id": 4,
                    "order": 4,
                    "type": "MBTI",
                    "spec": "T/F",
                    "response_type": "binary",
                    "prompt": "Egads! Your lights go out! Your power source is broken, what do you do?",
                    "answers": [
                        {
                            "question_id": 4,
                            "id": 9,
                            "raw_value": "T",
                            "value": 0,
                            "text": "Stay safe on the ship and use things around the ship to rig an alternate generator."
                        },
                        {
                            "question_id": 4,
                            "id": 10,
                            "raw_value": "F",
                            "value": 1,
                            "text": "Take the robots to look for sodalyt mineral, an unlimited power source on Mars."
                        }
                    ]
                },
                {
                    "question_id": 5,
                    "order": 5,
                    "type": "MBTI",
                    "spec": "J/P",
                    "response_type": "binary",
                    "prompt": "Time is running out, even your robots are starting to power down, what next?",
                    "answers": [
                        {
                            "question_id": 5,
                            "id": 11,
                            "raw_value": "P",
                            "value": 0,
                            "text": "Time to try those life forms you saw when you landed."
                        },
                        {
                            "question_id": 5,
                            "id": 12,
                            "raw_value": "J",
                            "value": 1,
                            "text": "Call NASA, if they don’t answer, abandon mission"
                        }
                    ] 
                },
                {
                    "question_id": 6,
                    "order": 6,
                    "type": "Kearsey",
                    "spec": "Archetypal (4)",
                    "response_type": "categorical",
                    "prompt": "NASA has been keeping tabs on you and sent you a message to visit the life forms.  Which android robot do you choose to come with you?",
                    "answers": [
                        {
                            "question_id": 6,
                            "id": 13,
                            "raw_value": "The Artist/The Explorer",
                            "value": ["ISTP", "ISFP", "ESTP", "ESFP"],
                            "text": "The anthropologist there to learn about cultures and civilizations."
                        },
                        {
                            "question_id": 6,
                            "id": 14,
                            "raw_value": "The Guardian/The Sentinel",
                            "value": ["ISTJ", "ISFJ", "ESTJ", "ESFJ"],
                            "text": "The doctor programmed only for your health needs."
                        },
                        {
                            "question_id": 6,
                            "id": 15,
                            "raw_value": "The Rationalist/The Analyst",
                            "value": ["INTJ", "INTP", "ENTJ", "ESFP"],
                            "text": "The engineer prewired for rational problem solving."
                        },
                        {
                            "question_id": 6,
                            "id": 16,
                            "raw_value": "The Idealist/The Diplomat",
                            "value": ["INFJ", "INFP", "ENFJ", "ENFP"],
                            "text": "The pilot which has artificial intelligence ability to think on the fly."
                        }
                    ] 
                },
                {
                    "question_id": 7,
                    "order": 7,
                    "type": "Kearsey",
                    "spec": "Archetypal (4)",
                    "response_type": "categorical",
                    "prompt": "What is your negotiation tactic when you meet the aliens?",
                    "answers": [
                        {
                            "question_id": 7,
                            "id": 17,
                            "raw_value": "The Artist/The Explorer",
                            "value": ["ISTP", "ISFP", "ESTP", "ESFP"],
                            "text": "Check out the alien’s bar, do some karaoke, learn the language, and remember to ask about their power source."
                        },
                        {
                            "question_id": 7,
                            "id": 18,
                            "raw_value": "The Guardian/The Sentinel",
                            "value": ["ISTJ", "ISFJ", "ESTJ", "ESFJ"],
                            "text": "March into their city and ask to speak to their leader."
                        },
                        {
                            "question_id": 7,
                            "id": 19,
                            "raw_value": "The Rationalist/The Analyst",
                            "value": ["INTJ", "INTP", "ENTJ", "ESFP"],
                            "text": "Recon around before entering the alien city."
                        },
                        {
                            "question_id": 7,
                            "id": 20,
                            "raw_value": "The Idealist/The Diplomat",
                            "value": ["INFJ", "INFP", "ENFJ", "ENFP"],
                            "text": "Find something to  trade with them."
                        }
                    ]
                },
                {
                    "question_id": 8,
                    "order": 7.10,
                    "type": "MBTI",
                    "spec": "N/S",
                    "response_type": "binary",
                    "prompt": "How do you choose to start your recon?",
                    "answers": [
                        {
                            "question_id": 8,
                            "id": 21,
                            "raw_value": "N",
                            "value": 0,
                            "text": "Your instincts"
                        },
                        {
                            "question_id": 8,
                            "id": 22,
                            "raw_value": "S",
                            "value": 1,
                            "text": "Alien Signs"
                        }
                    ]
                },
                {
                    "question_id": 9,
                    "order": 7.11,
                    "type": "MBTI",
                    "spec": "T/F",
                    "response_type": "binary",
                    "prompt": "Now you are in the middle of the city, what is your next move?",
                    "answers": [
                        {
                            "question_id": 9,
                            "id": 23,
                            "raw_value": "T",
                            "value": 0,
                            "text": "Ask an alien for directions to the leader."
                        },
                        {
                            "question_id": 9,
                            "id": 24,
                            "raw_value": "F",
                            "value": 1,
                            "text": "Follow the traffic flow to the largest building."
                        }
                    ]
                },
                {
                    "question_id": 10,
                    "order": 7.12,
                    "type": "MBTI",
                    "spec": "E/I",
                    "response_type": "binary",
                    "prompt": "Behold!  You made it to the leader of the aliens and a crowd of advisors!",
                    "answers": [
                        {
                            "question_id": 10,
                            "id": 25,
                            "raw_value": "E",
                            "value": 0,
                            "text": "You immediately strike up a conversation."
                        },
                        {
                            "question_id": 10,
                            "id": 26,
                            "raw_value": "I",
                            "value": 1,
                            "text": "You ask for a private meeting."
                        }
                    ]
                },
                {
                    "question_id": 11,
                    "order": 7.13,
                    "type": "MBTI",
                    "spec": "J/P",
                    "response_type": "binary",
                    "prompt": "The aliens give you two choices to deal with the power.",
                    "answers": [
                        {
                            "question_id": 11,
                            "id": 27,
                            "raw_value": "J",
                            "value": 0,
                            "text": "They fix your power, but you don’t know how they fix it."
                        },
                        {
                            "question_id": 11,
                            "id": 28,
                            "raw_value": "P",
                            "value": 1,
                            "text": "You live with them until you can figure out how to fix it yourself."
                        }
                    ]
                },
                {
                    "question_id": 12,
                    "order": 7.20,
                    "type": "MBTI",
                    "spec": "F/T",
                    "response_type": "binary",
                    "prompt": "What do you choose to trade…",
                    "answers": [
                        {
                            "question_id": 12,
                            "id": 29,
                            "raw_value": "F",
                            "value": 0,
                            "text": "A token from earth with sentimental value."
                        },
                        {
                            "question_id": 12,
                            "id": 30,
                            "raw_value": "T",
                            "value": 1,
                            "text": "Some seeds to grow new foods."
                        }
                    ]
                },
                {
                    "question_id": 13,
                    "order": 7.21,
                    "type": "MBTI",
                    "spec": "S/N",
                    "response_type": "binary",
                    "prompt": "You’re in the city.  Which way do you go?",
                    "answers": [
                        {
                            "question_id": 13,
                            "id": 31,
                            "raw_value": "S",
                            "value": 0,
                            "text": "Follow my instincts."
                        },
                        {
                            "question_id": 13,
                            "id": 32,
                            "raw_value": "N",
                            "value": 1,
                            "text": "Look for any alien signs"
                        }
                    ]
                },
                {
                    "question_id": 14,
                    "order": 7.22,
                    "type": "MBTI",
                    "spec": "E/I",
                    "response_type": "binary",
                    "prompt": "Behold!  You made it to the leader of the aliens and a crowd of advisors!",
                    "answers": [
                        {
                            "question_id": 14,
                            "id": 33,
                            "raw_value": "E",
                            "value": 0,
                            "text": "You immediately strike up a conversation."
                        },
                        {
                            "question_id": 14,
                            "id": 34,
                            "raw_value": "I",
                            "value": 1,
                            "text": "You ask for a private meeting."
                        }
                    ]
                },
                {
                    "question_id": 15,
                    "order": 7.23,
                    "type": "MBTI",
                    "spec": "J/P",
                    "response_type": "binary",
                    "prompt": "The aliens take your gift of trade and offer you two choices to fix the power.",
                    "answers": [
                        {
                            "question_id": 15,
                            "id": 35,
                            "raw_value": "J",
                            "value": 0,
                            "text": "They fix it but you don't know how."
                        },
                        {
                            "question_id": 15,
                            "id": 36,
                            "raw_value": "P",
                            "value": 1,
                            "text": "You live with them until you can fix it yourself."
                        }
                    ]
                },
                {
                    "question_id": 16,
                    "order": 7.30,
                    "type": "MBTI",
                    "spec": "E/I",
                    "response_type": "binary",
                    "prompt": "You marched directly into the city. Now  you're in front of the alien leader and a crowd of advisors.",
                    "answers": [
                        {
                            "question_id": 16,
                            "id": 37,
                            "raw_value": "E",
                            "value": 0,
                            "text": "You immediately strike up a converstaion."
                        },
                        {
                            "question_id": 16,
                            "id": 38,
                            "raw_value": "I",
                            "value": 1,
                            "text": "You ask for a private meeting."
                        }
                    ]
                },
                {
                    "question_id": 17,
                    "order": 7.31,
                    "type": "MBTI",
                    "spec": "F/T",
                    "response_type": "binary",
                    "prompt": "They offer you a drink before talking, do you take it?",
                    "answers": [
                        {
                            "question_id": 17,
                            "id": 39,
                            "raw_value": "F",
                            "value": 0,
                            "text": "You don’t want to be rude..."
                        },
                        {
                            "question_id": 17,
                            "id": 40,
                            "raw_value": "T",
                            "value": 1,
                            "text": "What's in it?"
                        }
                    ]
                },
                {
                    "question_id": 18,
                    "order": 7.32,
                    "type": "MBTI",
                    "spec": "S/N",
                    "response_type": "binary",
                    "prompt": "The aliens offer you two choices to fix the power.",
                    "answers": [
                        {
                            "question_id": 18,
                            "id": 41,
                            "raw_value": "S",
                            "value": 0,
                            "text": "They offer to fix it, but you don't know how."
                        },
                        {
                            "question_id": 18,
                            "id": 42,
                            "raw_value": "N",
                            "value": 1,
                            "text": "You live with them until you can fix it yourself."
                        }
                    ]
                },
                {
                    "question_id": 19,
                    "order": 7.33,
                    "type": "MBTI",
                    "spec": "J/P",
                    "response_type": "binary",
                    "prompt": "All's good! Now back to your exploration, how?",
                    "answers": [
                        {
                            "question_id": 19,
                            "id": 43,
                            "raw_value": "J",
                            "value": 0,
                            "text": "I look at the original goals."
                        },
                        {
                            "question_id": 19,
                            "id": 44,
                            "raw_value": "P",
                            "value": 1,
                            "text": "I come up with new goals."
                        }
                    ]
                },
                {
                    "question_id": 20,
                    "order": 7.40,
                    "type": "MBTI",
                    "spec": "J/P",
                    "response_type": "binary",
                    "prompt": "You're in the bar, what is your next move?",
                    "answers": [
                        {
                            "question_id": 20,
                            "id": 45,
                            "raw_value": "J",
                            "value": 0,
                            "text": "Assess the situation."
                        },
                        {
                            "question_id": 20,
                            "id": 46,
                            "raw_value": "P",
                            "value": 1,
                            "text": "Order an alien drink!"
                        }
                    ]
                },
                {
                    "question_id": 21,
                    "order": 7.41,
                    "type": "MBTI",
                    "spec": "F/T",
                    "response_type": "binary",
                    "prompt": "Oh no! An alien is choking!  What do you do?",
                    "answers": [
                        {
                            "question_id": 21,
                            "id": 47,
                            "raw_value": "F",
                            "value": 0,
                            "text": "Instincts are telling me to perform the heimlich."
                        },
                        {
                            "question_id": 21,
                            "id": 48,
                            "raw_value": "T",
                            "value": 1,
                            "text": "Yell for help, maybe they're just dancing."
                        }
                    ]
                },
                {
                    "question_id": 22,
                    "order": 7.42,
                    "type": "MBTI",
                    "spec": "E/I",
                    "response_type": "binary",
                    "prompt": "Whew!  The alien is okay and all eyes are on you, how do you transiton to ask about the power?",
                    "answers": [
                        {
                            "question_id": 22,
                            "id": 49,
                            "raw_value": "E",
                            "value": 0,
                            "text": "I yell 'another round' and then ask the room."
                        },
                        {
                            "question_id": 22,
                            "id": 50,
                            "raw_value": "I",
                            "value": 1,
                            "text": "I back away and ask the bartender."
                        }
                    ]
                },
                {
                    "question_id": 23,
                    "order": 7.43,
                    "type": "MBTI",
                    "spec": "S/N",
                    "response_type": "binary",
                    "prompt": "You get two options to fix the power.",
                    "answers": [
                        {
                            "question_id": 23,
                            "id": 51,
                            "raw_value": "S",
                            "value": 0,
                            "text": "They offer to walk you through the schematics to troubleshoot it yourself."
                        },
                        {
                            "question_id": 23,
                            "id": 52,
                            "raw_value": "N",
                            "value": 1,
                            "text": "They come to your camp and co-create a fix."
                        }
                    ]
                },
                {
                    "question_id": 24,
                    "order": 8,
                    "type": "MBTI",
                    "spec": "S/N",
                    "response_type": "binary",
                    "prompt": "Now that your power is back on, NASA asks you to go look for a large quantity of sodalyt mineral.  Where do you start?",
                    "answers": [
                        {
                            "question_id": 24,
                            "id": 53,
                            "raw_value": "S",
                            "value": 0,
                            "text": "You review the data and have a robot go look at a specific location."
                        },
                        {
                            "question_id": 24,
                            "id": 54,
                            "raw_value": "N",
                            "value": 1,
                            "text": " You talk to the Martians and go on an adventure  based upon their knowledge."
                        }
                    ]
                },
                {
                    "question_id": 25,
                    "order": 9,
                    "type": "MBTI",
                    "spec": "F/T",
                    "response_type": "binary",
                    "prompt": "Eureka!  You’ve found a massive amount of sodalyt.  Do you send it all back to Earth?",
                    "answers": [
                        {
                            "question_id": 25,
                            "id": 55,
                            "raw_value": "F",
                            "value": 0,
                            "text": "I send half to Earth and give the aliens the other half."
                        },
                        {
                            "question_id": 25,
                            "id": 56,
                            "raw_value": "T",
                            "value": 1,
                            "text": "No, I send half and keep the other half to further diplomatic relationship with the aliens."
                        }
                    ]
                },
                {
                    "question_id": 26,
                    "order": 10,
                    "type": "MBTI",
                    "spec": "J/P",
                    "response_type": "binary",
                    "prompt": "The Martians tell you about a once in a million years meteor shower coming next week.  You’re going to miss it because of the experiments NASA wants you to run.  What do you do?",
                    "answers": [
                        {
                            "question_id": 26,
                            "id": 57,
                            "raw_value": "J",
                            "value": 0,
                            "text": "I ask the aliens to record the shower so I can watch later."
                        },
                        {
                            "question_id": 26,
                            "id": 58,
                            "raw_value": "P",
                            "value": 1,
                            "text": " I go to the shower and give a reason why the experiments are delayed."
                        }
                    ]
                },
                {
                    "question_id": 27,
                    "order": 11,
                    "type": "MBTI",
                    "spec": "E/I",
                    "response_type": "binary",
                    "prompt": "Wow, three months went by fast!  Your favorite Earth holiday is coming up, how do you choose to observe it?",
                    "answers": [
                        {
                            "question_id": 27,
                            "id": 59,
                            "raw_value": "E",
                            "value": 0,
                            "text": "I throw a feast with the aliens and get them to add it to their calendar."
                        },
                        {
                            "question_id": 27,
                            "id": 60,
                            "raw_value": "I",
                            "value": 1,
                            "text": "I decorate my cabin and ask the robots to celebrate with me."
                        }
                    ]
                },
                {
                    "question_id": 28,
                    "order": 12,
                    "type": "Five Rs",
                    "spec": "Responsibility",
                    "response_type": "binary",
                    "prompt": "Fast forward and it is one year later.  How have you kept in touch with the aliens? ",
                    "answers": [
                        {
                            "question_id": 28,
                            "id": 61,
                            "raw_value": "null",
                            "value": 0,
                            "text": "I made a plan and routine for keeping up communications."
                        },
                        {
                            "question_id": 28,
                            "id": 62,
                            "raw_value": "null",
                            "value": 1,
                            "text": "I let them initiate and keep up periodically."
                        }
                    ]
                },
                {
                    "question_id": 29,
                    "order": 13,
                    "type": "Five Rs",
                    "spec": "Respect",
                    "response_type": "categorical",
                    "prompt": "We kept in touch...",
                    "answers": [
                        {
                            "question_id": 29,
                            "id": 63,
                            "raw_value": "null",
                            "value": 0,
                            "text": "Weekly"
                        },
                        {
                            "question_id": 29,
                            "id": 64,
                            "raw_value": "null",
                            "value": 1,
                            "text": "Monthly"
                        },
                        {
                            "question_id": 29,
                            "id": 65,
                            "raw_value": "null",
                            "value": 2,
                            "text": "We're Cohabitating!"
                        }
                    ]
                },
                {
                    "question_id": 30,
                    "order": 14,
                    "type": "Five Rs",
                    "spec": "Recognition",
                    "response_type": "categorical",
                    "prompt": "For your 1 year anniversary, how do you thank the alien’s for their help?",
                    "answers": [
                        {
                            "question_id": 30,
                            "id": 66,
                            "raw_value": "null",
                            "value": 0,
                            "text": "A Party!"
                        },
                        {
                            "question_id": 30,
                            "id": 67,
                            "raw_value": "null",
                            "value": 0,
                            "text": "An Earthly Token"
                        },
                        {
                            "question_id": 30,
                            "id": 68,
                            "raw_value": "null",
                            "value": 0,
                            "text": "A Formal Ceremony"
                        }
                    ]
                },
                {
                    "question_id": 31,
                    "order": 15,
                    "type": "Five Rs",
                    "spec": "ReAssurance",
                    "response_type": "binary",
                    "prompt": "OMG!  During your thank-you, the aliens tell you they have a virus they can’t control.  What is your response?",
                    "answers": [
                        {
                            "question_id": 31,
                            "id": 69,
                            "raw_value": "null",
                            "value": 0,
                            "text": "You reassure them everything is going to be okay, you have experience with this on Earth"
                        },
                        {
                            "question_id": 31,
                            "id": 70,
                            "raw_value": "null",
                            "value": 1,
                            "text": "You let them know you are not sure what to do, but you will help figure it out together."
                        }
                    ]
                },
                {
                    "question_id": 32,
                    "order": 16,
                    "type": "Five Rs",
                    "spec": "Resilience",
                    "response_type": "binary",
                    "prompt": "What is your next move?",
                    "answers": [
                        {
                            "question_id": 32,
                            "id": 71,
                            "raw_value": "null",
                            "value": 0,
                            "text": "Get back to Earth as quickly as possible and help from a quarantine pod at NASA."
                        },
                        {
                            "question_id": 32,
                            "id": 72,
                            "raw_value": "null",
                            "value": 1,
                            "text": "You stay, set up labs with the robots and help the aliens just like they helped you."
                        }
                    ]
                },
                {
                    "question_id": 33,
                    "order": 17,
                    "type": "Final Slide",
                    "spec": "null",
                    "response_type": "null",
                    "prompt": "Mission Accomplished!  You charted Mars, found the sodalyt, and helped save the Martians.",
                    "answers": [
                        {
                            "question_id": 33,
                            "id": 73,
                            "raw_value": "null",
                            "value": 0,
                            "text": "Ready for your results?"
                        }
                    ]
                }
            ]
        },
        {
            "story_id": 2,
            "story_title": "Atlantis Discovery",
            "story_thumbnail": " ",
            "icon": "md-boat",
            "questions": []
        },
        {
            "story_id": 3,
            "story_title": "The New Settlers on Plum Island",
            "story_thumbnail": " ",
            "icon": "md-cash",
            "questions": []
        },
        {
            "story_id": 4,
            "story_title": "Heights of History",
            "story_thumbnail": " ",
            "icon": "md-map",
            "questions": []
        }
    ]
}


// return object for post 

/* {
"E": "2",
"I": "1"
} */