export default {
    "stories": [
        {
            "story_id": 1,
            "story_title": "Mars Exploration",
            "story_thumbnail": " ",
            "questions": [
                {
                    "question_id": 1,
                    "order": 1,
                    "type": "MBTI",
                    "spec": "J/P",
                    "response_type": "binary",
                    "prompt": "Your spacecraft, the Ambassador, has just entered Mars's atmosphere, and you prepare to land. You detect some commotion, and it appears to be some life form activity, where do you land?",
                    "answers": [
                        {
                            "question_id": 1,
                            "id": 1,
                            "raw_value": "J",
                            "value": 0,
                            "text": "We try to get as close to where NASA told us to land regardless of life form activity."
                        },
                        {
                            "question_id": 1,
                            "id": 2,
                            "raw_value": "P",
                            "value": 1,
                            "text": "Close to the activity, let’s see what is going on down there!"
                        }
                    ]

                },
                {
                    "question_id": 2,
                    "order": 2,
                    "type": "MBTI",
                    "spec": "S/N",
                    "response_type": "binary",
                    "prompt": "You've landed safely. Now it's time to set up camp. How do you begin?",
                    "answers": [
                        {
                            "question_id": 2,
                            "id": 3,
                            "raw_value": "S",
                            "value": 0,
                            "text": "Everyone starts with step 1 as instructed in the manual and during training."
                        },
                        {
                            "question_id": 2,
                            "id": 4,
                            "raw_value": "N",
                            "value": 1,
                            "text": "Work with the team to figure out what needs to be done and get to it; manual can be referenced as needed."
                        }
                    ]
                },
                {
                    "question_id": 3,
                    "order": 3,
                    "type": "Kearsey",
                    "spec": "Archetypes (4)",
                    "response_type": "categorical",
                    "prompt": "Great, camp is ready!  Now for some food, what do you want to cook tonight?",
                    "answers": [
                        {
                            "question_id": 3,
                            "id": 5,
                            "raw_value": "The Artist/The Explorer",
                            "value": ["ISTP", "ISFP", "ESTP", "ESFP"],
                            "text": "Forage for what is available on Mars."
                        },
                        {
                            "question_id": 3,
                            "id": 6,
                            "raw_value": "The Guardian/The Sentinel",
                            "value": ["ISTJ", "ISFJ", "ESTJ", "ESFJ"],
                            "text": "Let's get ahead and meal prep for the whole week."
                        },
                        {
                            "question_id": 3,
                            "id": 7,
                            "raw_value": "The Rationalist/The Analyst",
                            "value": ["INTJ", "INTP", "ENTJ", "ESFP"],
                            "text": "We should stick to the ration guide prepped by NASA."
                        },
                        {
                            "question_id": 3,
                            "id": 8,
                            "raw_value": "The Idealist/The Diplomat",
                            "value": ["INFJ", "INFP", "ENFJ", "ENFP"],
                            "text": "This is a huge achievement, let's have a feast and celebrate right."
                        }
                    ]
                }, 
                {
                    "question_id": 4,
                    "order": 4,
                    "type": "MBTI",
                    "spec": "T/F",
                    "response_type": "binary",
                    "prompt": "Lights go out on your ship!  Uh-oh, you’ve run out of your power source and everyone wants to go explore for sodalyt, a mineral power source. What do you want to do?",
                    "answers": [
                        {
                            "question_id": 4,
                            "id": 9,
                            "raw_value": "T",
                            "value": 0,
                            "text": "I think we should be safe and use what we have on the ship to rig an alternate generator; no need to risk the team on an exploration."
                        },
                        {
                            "question_id": 4,
                            "id": 10,
                            "raw_value": "F",
                            "value": 1,
                            "text": "If we all go together we will be able to figure out something with our collective brain power."
                        }
                    ]
                },
                {
                    "question_id": 5,
                    "order": 5,
                    "type": "MBTI",
                    "spec": "E/I",
                    "response_type": "binary",
                    "prompt": "You weren't able to acquire a power source and time is running out.  What's next?",
                    "answers": [
                        {
                            "question_id": 5,
                            "id": 11,
                            "raw_value": "E",
                            "value": 0,
                            "text": "Time to make contact with the life forms you saw when you landed.  They have to have something powering their camp."
                        },
                        {
                            "question_id": 5,
                            "id": 12,
                            "raw_value": "I",
                            "value": 1,
                            "text": "Keep trying to call NASA. If they don’t answer, then we abandon mission and go back to earth."
                        }
                    ] 
                },
                {
                    "question_id": 6,
                    "order": 6,
                    "type": "Kearsey",
                    "spec": "Archetypal (4)",
                    "response_type": "categorical",
                    "prompt": "You told NASA the situation and the said try the life forms.  Who do you want to lead you on a diplomatic mission?",
                    "answers": [
                        {
                            "question_id": 6,
                            "id": 13,
                            "raw_value": "The Artist/The Explorer",
                            "value": ["ISTP", "ISFP", "ESTP", "ESFP"],
                            "text": "The Artist; The anthropologist of the group who is there to learn about cultures and any ancient civilizations."
                        },
                        {
                            "question_id": 6,
                            "id": 14,
                            "raw_value": "The Guardian/The Sentinel",
                            "value": ["ISTJ", "ISFJ", "ESTJ", "ESFJ"],
                            "text": "The Guardian; The doctor of the group, values the health of the team above all else."
                        },
                        {
                            "question_id": 6,
                            "id": 15,
                            "raw_value": "The Rationalist/The Analyst",
                            "value": ["INTJ", "INTP", "ENTJ", "ESFP"],
                            "text": "The Rationalist; Your engineer is the unbiased, objective, unemotional one in the group."
                        },
                        {
                            "question_id": 6,
                            "id": 16,
                            "raw_value": "The Idealist/The Diplomat",
                            "value": ["INFJ", "INFP", "ENFJ", "ENFP"],
                            "text": "The Idealist; The pilot who is adventurous and optimistic that with grit things will turn out okay."
                        }
                    ] 
                },
                {
                    "question_id": 7,
                    "order": 7,
                    "type": "Kearsey",
                    "spec": "Archetypal (4)",
                    "response_type": "categorical",
                    "prompt": "What is your negotiation tactic when you meet the aliens?  Put in order of priority of what seems like the best route, to the worst route of action.",
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
                            "text": "March directly into the alien camp and ask to speak to their leader, there's no time to waste."
                        },
                        {
                            "question_id": 7,
                            "id": 19,
                            "raw_value": "The Rationalist/The Analyst",
                            "value": ["INTJ", "INTP", "ENTJ", "ESFP"],
                            "text": "Recon around the area before we enter the alien camp."
                        },
                        {
                            "question_id": 7,
                            "id": 20,
                            "raw_value": "The Idealist/The Diplomat",
                            "value": ["INFJ", "INFP", "ENFJ", "ENFP"],
                            "text": "Find something in camp you can trade with them."
                        }
                    ]
                },
                {
                    "question_id": 8,
                    "order": 7.10,
                    "type": "MBTI",
                    "spec": "N/S",
                    "response_type": "binary",
                    "prompt": "Choose your location to start gathering the intel…",
                    "answers": [
                        {
                            "question_id": 8,
                            "id": 21,
                            "raw_value": "N",
                            "value": 0,
                            "text": "Your instincts tell you to go to the right."
                        },
                        {
                            "question_id": 8,
                            "id": 22,
                            "raw_value": "S",
                            "value": 1,
                            "text": "You choose to follow an alien sign with what seems like arrows pointing to the left"
                        }
                    ]
                },
                {
                    "question_id": 9,
                    "order": 7.11,
                    "type": "MBTI",
                    "spec": "T/F",
                    "response_type": "binary",
                    "prompt": "You've wound up in the middle of the city somehow, what is your next move?",
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
                            "text": "Follow the masses...there seems to be something going on up ahead"
                        }
                    ]
                },
                {
                    "question_id": 10,
                    "order": 7.12,
                    "type": "MBTI",
                    "spec": "E/I",
                    "response_type": "binary",
                    "prompt": "Behold!  You made it to the leader of the aliens and a crowd of his advisors!",
                    "answers": [
                        {
                            "question_id": 10,
                            "id": 25,
                            "raw_value": "E",
                            "value": 0,
                            "text": "You start the conversation asking about living on mars hoping that your sociability and friendliness will win them over."
                        },
                        {
                            "question_id": 10,
                            "id": 26,
                            "raw_value": "I",
                            "value": 1,
                            "text": "You ask for a private meeting where you can tell them about your power problem."
                        }
                    ]
                },
                {
                    "question_id": 11,
                    "order": 7.13,
                    "type": "MBTI",
                    "spec": "J/P",
                    "response_type": "binary",
                    "prompt": "The aliens offer to help you, but they won’t reveal the secret to their power source.  Which option do you choose?",
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
                            "text": "You live with them until you can figure out how to fix yourself."
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
                            "text": "Something from earth with sentimental value."
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
                    "prompt": "You’ve made it to the city with your trade goods.  Which way do you go?",
                    "answers": [
                        {
                            "question_id": 13,
                            "id": 31,
                            "raw_value": "S",
                            "value": 0,
                            "text": "Your instincts tell you to go to the right."
                        },
                        {
                            "question_id": 13,
                            "id": 32,
                            "raw_value": "N",
                            "value": 1,
                            "text": "You choose the alien sign with arrows pointing to the left"
                        }
                    ]
                },
                {
                    "question_id": 14,
                    "order": 7.22,
                    "type": "MBTI",
                    "spec": "E/I",
                    "response_type": "binary",
                    "prompt": "Behold!  You made it to the leader of the aliens!",
                    "answers": [
                        {
                            "question_id": 14,
                            "id": 33,
                            "raw_value": "E",
                            "value": 0,
                            "text": "You start the conversation asking about living on mars hoping that your sociability will win them over."
                        },
                        {
                            "question_id": 14,
                            "id": 34,
                            "raw_value": "I",
                            "value": 1,
                            "text": "You ask for a private meeting where you can tell them about your power problem."
                        }
                    ]
                },
                {
                    "question_id": 15,
                    "order": 7.23,
                    "type": "MBTI",
                    "spec": "J/P",
                    "response_type": "binary",
                    "prompt": "The aliens take your gift of trade and offer to help us yet they are not yet ready to share the secret behind their power.",
                    "answers": [
                        {
                            "question_id": 15,
                            "id": 35,
                            "raw_value": "J",
                            "value": 0,
                            "text": "You take them up on offer for their engineer to go fix it for you."
                        },
                        {
                            "question_id": 15,
                            "id": 36,
                            "raw_value": "P",
                            "value": 1,
                            "text": "You agree to live in their city with them until you can figure out how to fix it."
                        }
                    ]
                },
                {
                    "question_id": 16,
                    "order": 7.30,
                    "type": "MBTI",
                    "spec": "E/I",
                    "response_type": "binary",
                    "prompt": "You and your crewmate have trudged the city and marched directly to the heart of the city. You see the alien leader. What do you do next?",
                    "answers": [
                        {
                            "question_id": 16,
                            "id": 37,
                            "raw_value": "E",
                            "value": 0,
                            "text": "You start the conversation asking about living on mars hoping that your sociability will win them over."
                        },
                        {
                            "question_id": 16,
                            "id": 38,
                            "raw_value": "I",
                            "value": 1,
                            "text": "You tell them you have a problem with your power source and ask for help."
                        }
                    ]
                },
                {
                    "question_id": 17,
                    "order": 7.31,
                    "type": "MBTI",
                    "spec": "F/T",
                    "response_type": "binary",
                    "prompt": "They offer you a drink before talking, what do you do?",
                    "answers": [
                        {
                            "question_id": 17,
                            "id": 39,
                            "raw_value": "F",
                            "value": 0,
                            "text": "You don’t want to be rude and accept taking a sip."
                        },
                        {
                            "question_id": 17,
                            "id": 40,
                            "raw_value": "T",
                            "value": 1,
                            "text": "You politely decline since you do not know what it will do to you."
                        }
                    ]
                },
                {
                    "question_id": 18,
                    "order": 7.32,
                    "type": "MBTI",
                    "spec": "S/N",
                    "response_type": "binary",
                    "prompt": "The aliens offer to help.  Which option do you choose?",
                    "answers": [
                        {
                            "question_id": 18,
                            "id": 41,
                            "raw_value": "S",
                            "value": 0,
                            "text": "They offer for their engineer to walk you through schematics."
                        },
                        {
                            "question_id": 18,
                            "id": 42,
                            "raw_value": "N",
                            "value": 1,
                            "text": "They can come to your camp and you can co-create a solution."
                        }
                    ]
                },
                {
                    "question_id": 19,
                    "order": 7.33,
                    "type": "MBTI",
                    "spec": "J/P",
                    "response_type": "binary",
                    "prompt": "You’ve got the help from the alien’s and now it is time to get the colony going. What do you do?",
                    "answers": [
                        {
                            "question_id": 19,
                            "id": 43,
                            "raw_value": "J",
                            "value": 0,
                            "text": "We follow the guidelines outlined by NASA and get things back on track to meet our deadlines."
                        },
                        {
                            "question_id": 19,
                            "id": 44,
                            "raw_value": "P",
                            "value": 1,
                            "text": "We continue to work with aliens on adjusting to life on Mars."
                        }
                    ]
                },
                {
                    "question_id": 20,
                    "order": 7.40,
                    "type": "MBTI",
                    "spec": "J/P",
                    "response_type": "binary",
                    "prompt": "You enter the bar;",
                    "answers": [
                        {
                            "question_id": 20,
                            "id": 45,
                            "raw_value": "J",
                            "value": 0,
                            "text": "You look around to assess the situation with your back to the door just in case."
                        },
                        {
                            "question_id": 20,
                            "id": 46,
                            "raw_value": "P",
                            "value": 1,
                            "text": "You go right to the middle of the action and order the same thing he is having!"
                        }
                    ]
                },
                {
                    "question_id": 21,
                    "order": 7.41,
                    "type": "MBTI",
                    "spec": "F/T",
                    "response_type": "binary",
                    "prompt": "Oh no you see an alien who appears to be choking what do you do?",
                    "answers": [
                        {
                            "question_id": 21,
                            "id": 47,
                            "raw_value": "F",
                            "value": 0,
                            "text": "Go give them the heimlich maneuver of course!"
                        },
                        {
                            "question_id": 21,
                            "id": 48,
                            "raw_value": "T",
                            "value": 1,
                            "text": "I yell for help because they are an alien I don’t know what organs they have!"
                        }
                    ]
                },
                {
                    "question_id": 22,
                    "order": 7.42,
                    "type": "MBTI",
                    "spec": "E/I",
                    "response_type": "binary",
                    "prompt": "Whew!  The alien is okay and the crowd is cheering.  All alien eyes are on you.",
                    "answers": [
                        {
                            "question_id": 22,
                            "id": 49,
                            "raw_value": "E",
                            "value": 0,
                            "text": "You help the alien up and say “another round!” and then you ask the alien for some help with your power source."
                        },
                        {
                            "question_id": 22,
                            "id": 50,
                            "raw_value": "I",
                            "value": 1,
                            "text": "You don’t like to be the center of attention, you slink away to the bar and ask the bartender for help with a power source."
                        }
                    ]
                },
                {
                    "question_id": 23,
                    "order": 7.43,
                    "type": "MBTI",
                    "spec": "S/N",
                    "response_type": "binary",
                    "prompt": "The aliens offer to help. Which option do you choose?",
                    "answers": [
                        {
                            "question_id": 23,
                            "id": 51,
                            "raw_value": "S",
                            "value": 0,
                            "text": "They offer for their engineer to walk you through schematics."
                        },
                        {
                            "question_id": 23,
                            "id": 52,
                            "raw_value": "N",
                            "value": 1,
                            "text": "They can come to your camp and you can co-create a solution."
                        }
                    ]
                },
                {
                    "question_id": 24,
                    "order": 8,
                    "type": "MBTI",
                    "spec": "S/N",
                    "response_type": "binary",
                    "prompt": "You’re living the good life on Mars, now NASA wants you to work on your mission to find sodalyt a precious mineral. Where do you start looking?",
                    "answers": [
                        {
                            "question_id": 24,
                            "id": 53,
                            "raw_value": "S",
                            "value": 0,
                            "text": "You scour the geological surveys, run the data with your experts, have the Mars rover do an initial pass at specific locations."
                        },
                        {
                            "question_id": 24,
                            "id": 54,
                            "raw_value": "N",
                            "value": 1,
                            "text": "You talk to local Martians about minerals, listen to their exploration stories, and decide on some areas to survey with them based upon what they have personally seen."
                        }
                    ]
                },
                {
                    "question_id": 25,
                    "order": 9,
                    "type": "MBTI",
                    "spec": "F/T",
                    "response_type": "binary",
                    "prompt": "Eureka! You’ve found a massive amount of the mineral.  Do send it all back to Earth?",
                    "answers": [
                        {
                            "question_id": 25,
                            "id": 55,
                            "raw_value": "F",
                            "value": 0,
                            "text": "You split it 50 / 50 with the aliens, let NASA know half is coming to Earth, and everyone is happy."
                        },
                        {
                            "question_id": 25,
                            "id": 56,
                            "raw_value": "T",
                            "value": 1,
                            "text": "You decide not to send it all back because you can use it as leverage to further diplomatic relations with the Aliens."
                        }
                    ]
                },
                {
                    "question_id": 26,
                    "order": 10,
                    "type": "MBTI",
                    "spec": "J/P",
                    "response_type": "binary",
                    "prompt": "The Martians tell you about a once in a million year meteor shower coming next week.  NASA has specific experiments that you need to run next week which will make you miss the meteor shower.  What do you do?",
                    "answers": [
                        {
                            "question_id": 26,
                            "id": 57,
                            "raw_value": "J",
                            "value": 0,
                            "text": "I ask the aliens to record the shower, after-all I have deadlines I need to meet with these experiments."
                        },
                        {
                            "question_id": 26,
                            "id": 58,
                            "raw_value": "P",
                            "value": 1,
                            "text": "I decide to go to the meteor shower and will make up a reason why the experiments were delayed."
                        }
                    ]
                },
                {
                    "question_id": 27,
                    "order": 11,
                    "type": "MBTI",
                    "spec": "E/I",
                    "response_type": "binary",
                    "prompt": "Wow, 6 months went by fast!  Everyone is missing the Earth holidays. How do you choose to recognize the holiday season?",
                    "answers": [
                        {
                            "question_id": 27,
                            "id": 59,
                            "raw_value": "E",
                            "value": 0,
                            "text": "Throw a Thanksgiving dinner of course with the Aliens and teach them about Black Friday sales shopping on Earth."
                        },
                        {
                            "question_id": 27,
                            "id": 60,
                            "raw_value": "I",
                            "value": 1,
                            "text": "I decorate my cabin and cook a meal for a few close friends."
                        }
                    ]
                },
                {
                    "question_id": 28,
                    "order": 12,
                    "type": "Five Rs",
                    "spec": "Responsibility",
                    "response_type": "binary",
                    "prompt": "Well, Now its been 1 year since landing on Mars.  How have you kept in touch with the aliens?",
                    "answers": [
                        {
                            "question_id": 28,
                            "id": 61,
                            "raw_value": "null",
                            "value": 0,
                            "text": "I made sure we had a plan to keep communications open."
                        },
                        {
                            "question_id": 28,
                            "id": 62,
                            "raw_value": "null",
                            "value": 1,
                            "text": "I waited for the alien to open communications when they saw fit."
                        }
                    ]
                },
                {
                    "question_id": 29,
                    "order": 13,
                    "type": "Five Rs",
                    "spec": "Respect",
                    "response_type": "categorical",
                    "prompt": "How often did you keep in touch?",
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
                    "prompt": "For your 1 year anniversary, how do you recognize the alien’s for their help?",
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
                            "value": 1,
                            "text": "An Earthly Token"
                        },
                        {
                            "question_id": 30,
                            "id": 68,
                            "raw_value": "null",
                            "value": 2,
                            "text": "A Formal Ceremony at Our Base."
                        }
                    ]
                },
                {
                    "question_id": 31,
                    "order": 15,
                    "type": "Five Rs",
                    "spec": "ReAssurance",
                    "response_type": "binary",
                    "prompt": "Egads!  When you thank the alien’s they tell you they have a virus they can’t control. What do you say to them?",
                    "answers": [
                        {
                            "question_id": 31,
                            "id": 69,
                            "raw_value": "null",
                            "value": 0,
                            "text": "You reassure them everything is going to be okay after-all you’ve seen viruses on earth before."
                        },
                        {
                            "question_id": 31,
                            "id": 70,
                            "raw_value": "null",
                            "value": 1,
                            "text": "You tell them you are not sure what to do, but that you will help them figure it out together."
                        }
                    ]
                },
                {
                    "question_id": 32,
                    "order": 16,
                    "type": "Five Rs",
                    "spec": "Resilience",
                    "response_type": "binary",
                    "prompt": "You get the other Earthlings together and tell them the situation with the alien virus. What do you do next?",
                    "answers": [
                        {
                            "question_id": 32,
                            "id": 71,
                            "raw_value": "null",
                            "value": 0,
                            "text": "Leave everything where it is and get back to Earth as quickly as possible; help the aliens from a quarantine pod on Earth."
                        },
                        {
                            "question_id": 32,
                            "id": 72,
                            "raw_value": "null",
                            "value": 1,
                            "text": "You set up labs and help the alien’s get through the virus; after-all you would not have survived if it were not for their help."
                        }
                    ]
                },
                {
                    "question_id": 33,
                    "order": 17,
                    "type": "Final Slide",
                    "spec": "null",
                    "response_type": "null",
                    "prompt": "Fantastic!  You were able to help them through solving their virus problem and have been able to close out your mission colonizing mars, finding sodalyt the precious mineral, and setting up diplomatic relations with an alien race!",
                    "answers": []
                }
            ]
        }
    ]
}