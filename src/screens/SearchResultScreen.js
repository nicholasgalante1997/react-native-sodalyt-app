import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity, Button, Image, Switch, FlatList} from 'react-native'
import ProfessionalUserData from '../constants/professionalUserDummyData'
import {useSelector, useDispatch} from 'react-redux' 
import * as actions from '../store/actions/actionCreator'
import { CheckBox } from 'react-native-elements'

// STYLE ONLY
import Colors from '../constants/Colors';
import {Ionicons} from '@expo/vector-icons'
import Input from '../components/custom/Input'
import MTMediumText from '../components/custom/MTMediumText';
import MTBoldText from '../components/custom/MTBoldText';
import MTLightText from '../components/custom/MTLightText';

const SearchResultScreen = (props) => {
    
    // VARIABLE ASSIGNMENT

    const reduxProfArray = useSelector(state => state.expertArray)

    // Currently searched for phrase
    const searchedTerm = useSelector(state => state.search)
    const [newSearchValue, setNewSearchValue] = useState("")
    
    // current user preferences returned from last post
    const currentUserDetails = useSelector(state => state.userDetails)
    const [personalityType, setPersonalityType] = useState(currentUserDetails.MBTI)
    const [sodalytPref, setSodalytPref] = useState(currentUserDetails.sodalytPreference)

    // filter state management
    const filterManager = useSelector(state => state.filters)
    const [sodalytVerified, setSodalytVerified] = useState(false)
    const [showCulturalFilter, setShowCulturalFilter] = useState(false)
    const [showServiceFilter, setShowServiceFilter] = useState(false)
    const [showPsychologyFilter, setShowPsychologyFilter] = useState(false)
    const [servicePersonalTrainerA1, setServicePersonalTrainerA1] = useState(false)
    const [servicePersonalTrainerA2, setServicePersonalTrainerA2] = useState(false)
    const [servicePersonalTrainerA3, setServicePersonalTrainerA3] = useState(false)
    const [servicePersonalTrainerA4, setServicePersonalTrainerA4] = useState(false)
    const [servicePersonalTrainerA5, setServicePersonalTrainerA5] = useState(false)
    const [servicePersonalTrainerA6, setServicePersonalTrainerA6] = useState(false)
    const [servicePersonalTrainerA7, setServicePersonalTrainerA7] = useState(false)
    const [sodalytTypingActive, setSodalytTypingActive] = useState(true)

    // REDUX ACTION MANAGEMENT
    const dispatch = useDispatch()

    // Sodalyt Type Breakdowns
    const BuilderTypes = ["INTJ", "INTP", "ENTJ", "ENTP"]
    const VisionaryTypes = ["INFJ", "INFP", "ENFJ", "ENFP"]
    const ChampionTypes = ["ISTJ", "ISFJ", "ESTJ", "ESFJ"]
    const CreatorTypes = ["ISTP", "ISFP", "ESTP", "ESFP"]

    // FUNCTIONAL CODE 
    const fetchSearchedForUsers =  () => {

        let headers = new Headers()
        headers.append("Content-Type", "application/json")

        let content = JSON.stringify({
            "searchTerm": searchedTerm.toLowerCase(),
            "currentUserMbti": personalityType,
            "currentUserSodalytPref": sodalytPref
        })

        let requestOptions = {
            method: 'POST',
            headers: headers,
            body: content,
            redirect: 'follow'
        }

        const ENDPOINT = "https://3yfa6tf5vj.execute-api.us-east-2.amazonaws.com/demo1/getprofessionals"

        fetch(ENDPOINT, requestOptions)
        .then(r => r.json())
        .then(arrayResponse => {
            dispatch(actions.setSearchedExpertsResponse(arrayResponse))
        })
        .catch(err => console.log(err))

    }

    useEffect(() => {
        fetchSearchedForUsers()
    }, [searchedTerm])

    const handleNewSearchInput = (textInput) => {
        setNewSearchValue(textInput)
    }

    const generateMatchPercentage = () => {

    }

    const assignSodalytTypes = (profUserArray) => {
        profUserArray.forEach(prof => {
            if (BuilderTypes.includes(prof.companyMBTIResponse)){
                prof.sodalytArchetype = "The Builder"
            }
            if (VisionaryTypes.includes(prof.companyMBTIResponse)){
                prof.sodalytArchetype = "The Visionary"
            }
            if (ChampionTypes.includes(prof.companyMBTIResponse)){
                prof.sodalytArchetype = "The Champion"
            }
            if (CreatorTypes.includes(prof.companyMBTIResponse)){
                prof.sodalytArchetype = "The Creator"
            }
        })
    }

    const generateKearseyPercentage = (sodalytPref) => {
        switch(sodalytPref){
            default: 
                return
        }
    }

    const generateMBTIPercentage = (mbtiType) => {
        switch(mbtiType){
            case "ENTJ":
               reduxProfArray.forEach(professional => {
                   console.log(professional, professional.companyMBTIResponse)
                    if (professional.companyMBTIResponse === "ISFP"){
                        professional.dynamicMeyersBriggsPercentage = 100
                    }
                    if (professional.companyMBTIResponse === "INFP"){
                        professional.dynamicMeyersBriggsPercentage = 94
                    }
                    if (professional.companyMBTIResponse === "ESFP"){
                        professional.dynamicMeyersBriggsPercentage = 87
                    }
                    if (professional.companyMBTIResponse === "ESTP"){
                        professional.dynamicMeyersBriggsPercentage = 81
                    }
                    if (professional.companyMBTIResponse === "ISTP"){
                        professional.dynamicMeyersBriggsPercentage = 75
                    }
                    if (professional.companyMBTIResponse === "INTP"){
                        professional.dynamicMeyersBriggsPercentage = 69
                    }
                    if (professional.companyMBTIResponse === "ENFP"){
                        professional.dynamicMeyersBriggsPercentage = 63
                    }
                    if (professional.companyMBTIResponse === "INFJ"){
                        professional.dynamicMeyersBriggsPercentage = 56
                    }
                    if (professional.companyMBTIResponse === "INTJ"){
                        professional.dynamicMeyersBriggsPercentage = 50
                    }
                    if (professional.companyMBTIResponse === "ENFJ"){
                        professional.dynamicMeyersBriggsPercentage = 44
                    }
                    if (professional.companyMBTIResponse === "ISTJ"){
                        professional.dynamicMeyersBriggsPercentage = 37
                    }
                    if (professional.companyMBTIResponse === "ENTP"){
                        professional.dynamicMeyersBriggsPercentage = 31
                    }
                    if (professional.companyMBTIResponse === "ESTJ"){
                        professional.dynamicMeyersBriggsPercentage = 25
                    }
                    if (professional.companyMBTIResponse === "ENTJ"){
                        professional.dynamicMeyersBriggsPercentage = 19
                    }
                    if (professional.companyMBTIResponse === "ESFJ"){
                        professional.dynamicMeyersBriggsPercentage = 12
                    }
                    if (professional.companyMBTIResponse === "ISFJ"){
                        professional.dynamicMeyersBriggsPercentage = 6
                    }
                })
                break;
            case "ENTP":
                reduxProfArray.forEach(professional => {
                    if (professional.companyMBTIResponse === "ISFJ"){
                        professional.dynamicMeyersBriggsPercentage = 100
                    }
                    if (professional.companyMBTIResponse === "ISTJ"){
                        professional.dynamicMeyersBriggsPercentage = 94
                    }
                    if (professional.companyMBTIResponse === "ENTP"){
                        professional.dynamicMeyersBriggsPercentage = 87
                    }
                    if (professional.companyMBTIResponse === "ESTJ"){
                        professional.dynamicMeyersBriggsPercentage = 81
                    }
                    if (professional.companyMBTIResponse === "ESFJ"){
                        professional.dynamicMeyersBriggsPercentage = 75
                    }
                    if (professional.companyMBTIResponse === "INFJ"){
                        professional.dynamicMeyersBriggsPercentage = 69
                    }
                    if (professional.companyMBTIResponse === "INTJ"){
                        professional.dynamicMeyersBriggsPercentage = 63
                    }
                    if (professional.companyMBTIResponse === "INFP"){
                        professional.dynamicMeyersBriggsPercentage = 56
                    }
                    if (professional.companyMBTIResponse === "ENFJ"){
                        professional.dynamicMeyersBriggsPercentage = 50
                    }
                    if (professional.companyMBTIResponse === "INTP"){
                        professional.dynamicMeyersBriggsPercentage = 44
                    }
                    if (professional.companyMBTIResponse === "ISTP"){
                        professional.dynamicMeyersBriggsPercentage = 37
                    }
                    if (professional.companyMBTIResponse === "ENFP"){
                        professional.dynamicMeyersBriggsPercentage = 31
                    }
                    if (professional.companyMBTIResponse === "ESTP"){
                        professional.dynamicMeyersBriggsPercentage = 25
                    }
                    if (professional.companyMBTIResponse === "ENTJ"){
                        professional.dynamicMeyersBriggsPercentage = 19
                    }
                    if (professional.companyMBTIResponse === "ESFP"){
                        professional.dynamicMeyersBriggsPercentage = 12
                    }
                    if (professional.companyMBTIResponse === "ISFP"){
                        professional.dynamicMeyersBriggsPercentage = 6
                    }
                })
                break;
            case "INTJ":
                reduxProfArray.forEach(professional => {
                    if (professional.companyMBTIResponse === "ESFP"){
                        professional.dynamicMeyersBriggsPercentage = 100
                    }
                    if (professional.companyMBTIResponse === "ESTP"){
                        professional.dynamicMeyersBriggsPercentage = 94
                    }
                    if (professional.companyMBTIResponse === "ISFP"){
                        professional.dynamicMeyersBriggsPercentage = 87
                    }
                    if (professional.companyMBTIResponse === "INFP"){
                        professional.dynamicMeyersBriggsPercentage = 81
                    }
                    if (professional.companyMBTIResponse === "INFJ"){
                        professional.dynamicMeyersBriggsPercentage = 75
                    }
                    if (professional.companyMBTIResponse === "ENFP"){
                        professional.dynamicMeyersBriggsPercentage = 69
                    }
                    if (professional.companyMBTIResponse === "ENTP"){
                        professional.dynamicMeyersBriggsPercentage = 63
                    }
                    if (professional.companyMBTIResponse === "ISTP"){
                        professional.dynamicMeyersBriggsPercentage = 56
                    }
                    if (professional.companyMBTIResponse === "ENFJ"){
                        professional.dynamicMeyersBriggsPercentage = 50
                    }
                    if (professional.companyMBTIResponse === "INTJ"){
                        professional.dynamicMeyersBriggsPercentage = 44
                    }
                    if (professional.companyMBTIResponse === "ISTJ"){
                        professional.dynamicMeyersBriggsPercentage = 37
                    }
                    if (professional.companyMBTIResponse === "ENTJ"){
                        professional.dynamicMeyersBriggsPercentage = 31
                    }
                    if (professional.companyMBTIResponse === "INTP"){
                        professional.dynamicMeyersBriggsPercentage = 25
                    }
                    if (professional.companyMBTIResponse === "ESTJ"){
                        professional.dynamicMeyersBriggsPercentage = 19
                    }
                    if (professional.companyMBTIResponse === "ISFJ"){
                        professional.dynamicMeyersBriggsPercentage = 12
                    }
                    if (professional.companyMBTIResponse === "ESFJ"){
                        professional.dynamicMeyersBriggsPercentage = 6
                    }
                })
                break;
            case "INTP":
                reduxProfArray.forEach(professional => {
                    if (professional.companyMBTIResponse === "ESFJ"){
                        professional.dynamicMeyersBriggsPercentage = 100
                    }
                    if (professional.companyMBTIResponse === "ENFJ"){
                        professional.dynamicMeyersBriggsPercentage = 94
                    }
                    if (professional.companyMBTIResponse === "ISFJ"){
                        professional.dynamicMeyersBriggsPercentage = 87
                    }
                    if (professional.companyMBTIResponse === "INFJ"){
                        professional.dynamicMeyersBriggsPercentage = 81
                    }
                    if (professional.companyMBTIResponse === "ESTJ"){
                        professional.dynamicMeyersBriggsPercentage = 75
                    }
                    if (professional.companyMBTIResponse === "ISTJ"){
                        professional.dynamicMeyersBriggsPercentage = 69
                    }
                    if (professional.companyMBTIResponse === "ENTJ"){
                        professional.dynamicMeyersBriggsPercentage = 63
                    }
                    if (professional.companyMBTIResponse === "ENFP"){
                        professional.dynamicMeyersBriggsPercentage = 56
                    }
                    if (professional.companyMBTIResponse === "ENTP"){
                        professional.dynamicMeyersBriggsPercentage = 50
                    }
                    if (professional.companyMBTIResponse === "INTP"){
                        professional.dynamicMeyersBriggsPercentage = 44
                    }
                    if (professional.companyMBTIResponse === "INTJ"){
                        professional.dynamicMeyersBriggsPercentage = 37
                    }
                    if (professional.companyMBTIResponse === "ISTP"){
                        professional.dynamicMeyersBriggsPercentage = 31
                    }
                    if (professional.companyMBTIResponse === "INFP"){
                        professional.dynamicMeyersBriggsPercentage = 25
                    }
                    if (professional.companyMBTIResponse === "ESTP"){
                        professional.dynamicMeyersBriggsPercentage = 19
                    }
                    if (professional.companyMBTIResponse === "ISFP"){
                        professional.dynamicMeyersBriggsPercentage = 12
                    }
                    if (professional.companyMBTIResponse === "ESFP"){
                        professional.dynamicMeyersBriggsPercentage = 6
                    }
                })
                break;
            case "ESTJ":
                reduxProfArray.forEach(professional => {
                    if (professional.companyMBTIResponse === "INFP"){
                        professional.dynamicMeyersBriggsPercentage = 100
                    }
                    if (professional.companyMBTIResponse === "ISFP"){
                        professional.dynamicMeyersBriggsPercentage = 94
                    }
                    if (professional.companyMBTIResponse === "INTP"){
                        professional.dynamicMeyersBriggsPercentage = 87
                    }
                    if (professional.companyMBTIResponse === "ENTP"){
                        professional.dynamicMeyersBriggsPercentage = 81
                    }
                    if (professional.companyMBTIResponse === "ISTP"){
                        professional.dynamicMeyersBriggsPercentage = 75
                    }
                    if (professional.companyMBTIResponse === "ESFP"){
                        professional.dynamicMeyersBriggsPercentage = 69
                    }
                    if (professional.companyMBTIResponse === "ENFP"){
                        professional.dynamicMeyersBriggsPercentage = 63
                    }
                    if (professional.companyMBTIResponse === "ISTJ"){
                        professional.dynamicMeyersBriggsPercentage = 56
                    }
                    if (professional.companyMBTIResponse === "ISFJ"){
                        professional.dynamicMeyersBriggsPercentage = 50
                    }
                    if (professional.companyMBTIResponse === "ESTJ"){
                        professional.dynamicMeyersBriggsPercentage = 44
                    }
                    if (professional.companyMBTIResponse === "ESFJ"){
                        professional.dynamicMeyersBriggsPercentage = 37
                    }
                    if (professional.companyMBTIResponse === "INTJ"){
                        professional.dynamicMeyersBriggsPercentage = 31
                    }
                    if (professional.companyMBTIResponse === "ENTJ"){
                        professional.dynamicMeyersBriggsPercentage = 25
                    }
                    if (professional.companyMBTIResponse === "ESTP"){
                        professional.dynamicMeyersBriggsPercentage = 19
                    }
                    if (professional.companyMBTIResponse === "ENFJ"){
                        professional.dynamicMeyersBriggsPercentage = 12
                    }
                    if (professional.companyMBTIResponse === "INFJ"){
                        professional.dynamicMeyersBriggsPercentage = 6
                    }
                })
                break;
            case "ESFJ":
                reduxProfArray.forEach(professional => {
                    if (professional.companyMBTIResponse === "INTP"){
                        professional.dynamicMeyersBriggsPercentage = 100
                    }
                    if (professional.companyMBTIResponse === "ISTP"){
                        professional.dynamicMeyersBriggsPercentage = 94
                    }
                    if (professional.companyMBTIResponse === "ENTP"){
                        professional.dynamicMeyersBriggsPercentage = 87
                    }
                    if (professional.companyMBTIResponse === "ENFP"){
                        professional.dynamicMeyersBriggsPercentage = 81
                    }
                    if (professional.companyMBTIResponse === "INFP"){
                        professional.dynamicMeyersBriggsPercentage = 75
                    }
                    if (professional.companyMBTIResponse === "ISTJ"){
                        professional.dynamicMeyersBriggsPercentage = 69
                    }
                    if (professional.companyMBTIResponse === "ESFJ"){
                        professional.dynamicMeyersBriggsPercentage = 63
                    }
                    if (professional.companyMBTIResponse === "ESTP"){
                        professional.dynamicMeyersBriggsPercentage = 56
                    }
                    if (professional.companyMBTIResponse === "ISFP"){
                        professional.dynamicMeyersBriggsPercentage = 50
                    }
                    if (professional.companyMBTIResponse === "ENFJ"){
                        professional.dynamicMeyersBriggsPercentage = 44
                    }
                    if (professional.companyMBTIResponse === "ISFJ"){
                        professional.dynamicMeyersBriggsPercentage = 37
                    }
                    if (professional.companyMBTIResponse === "INFJ"){
                        professional.dynamicMeyersBriggsPercentage = 31
                    }
                    if (professional.companyMBTIResponse === "ESTJ"){
                        professional.dynamicMeyersBriggsPercentage = 25
                    }
                    if (professional.companyMBTIResponse === "ESFP"){
                        professional.dynamicMeyersBriggsPercentage = 19
                    }
                    if (professional.companyMBTIResponse === "ENTJ"){
                        professional.dynamicMeyersBriggsPercentage = 12
                    }
                    if (professional.companyMBTIResponse === "INTJ"){
                        professional.dynamicMeyersBriggsPercentage = 6
                    }
                })
                break;
            case "ISTJ":
                reduxProfArray.forEach(professional => {
                    if (professional.companyMBTIResponse === "ENFP"){
                        professional.dynamicMeyersBriggsPercentage = 100
                    }
                    if (professional.companyMBTIResponse === "ENTP"){
                        professional.dynamicMeyersBriggsPercentage = 94
                    }
                    if (professional.companyMBTIResponse === "ISFP"){
                        professional.dynamicMeyersBriggsPercentage = 87
                    }
                    if (professional.companyMBTIResponse === "INFP"){
                        professional.dynamicMeyersBriggsPercentage = 81
                    }
                    if (professional.companyMBTIResponse === "ESTP"){
                        professional.dynamicMeyersBriggsPercentage = 75
                    }
                    if (professional.companyMBTIResponse === "ESFP"){
                        professional.dynamicMeyersBriggsPercentage = 69
                    }
                    if (professional.companyMBTIResponse === "INTP"){
                        professional.dynamicMeyersBriggsPercentage = 63
                    }
                    if (professional.companyMBTIResponse === "ESTJ"){
                        professional.dynamicMeyersBriggsPercentage = 56
                    }
                    if (professional.companyMBTIResponse === "ESFJ"){
                        professional.dynamicMeyersBriggsPercentage = 50
                    }
                    if (professional.companyMBTIResponse === "ISTJ"){
                        professional.dynamicMeyersBriggsPercentage = 44
                    }
                    if (professional.companyMBTIResponse === "INTJ"){
                        professional.dynamicMeyersBriggsPercentage = 37
                    }
                    if (professional.companyMBTIResponse === "ISFJ"){
                        professional.dynamicMeyersBriggsPercentage = 31
                    }
                    if (professional.companyMBTIResponse === "ISTP"){
                        professional.dynamicMeyersBriggsPercentage = 25
                    }
                    if (professional.companyMBTIResponse === "ENTJ"){
                        professional.dynamicMeyersBriggsPercentage = 19
                    }
                    if (professional.companyMBTIResponse === "INFJ"){
                        professional.dynamicMeyersBriggsPercentage = 12
                    }
                    if (professional.companyMBTIResponse === "ENFJ"){
                        professional.dynamicMeyersBriggsPercentage = 6
                    }
                })
                break;
            case "ISFJ":
                reduxProfArray.forEach(professional => {
                    if (professional.companyMBTIResponse === "ENTP"){
                        professional.dynamicMeyersBriggsPercentage = 100
                    }
                    if (professional.companyMBTIResponse === "ENFP"){
                        professional.dynamicMeyersBriggsPercentage = 94
                    }
                    if (professional.companyMBTIResponse === "INTP"){
                        professional.dynamicMeyersBriggsPercentage = 87
                    }
                    if (professional.companyMBTIResponse === "ISTP"){
                        professional.dynamicMeyersBriggsPercentage = 81
                    }
                    if (professional.companyMBTIResponse === "ESFP"){
                        professional.dynamicMeyersBriggsPercentage = 75
                    }
                    if (professional.companyMBTIResponse === "ESTP"){
                        professional.dynamicMeyersBriggsPercentage = 69
                    }
                    if (professional.companyMBTIResponse === "ESTJ"){
                        professional.dynamicMeyersBriggsPercentage = 63
                    }
                    if (professional.companyMBTIResponse === "INFP"){
                        professional.dynamicMeyersBriggsPercentage = 56
                    }
                    if (professional.companyMBTIResponse === "ESFJ"){
                        professional.dynamicMeyersBriggsPercentage = 50
                    }
                    if (professional.companyMBTIResponse === "ISTJ"){
                        professional.dynamicMeyersBriggsPercentage = 44
                    }
                    if (professional.companyMBTIResponse === "ISFJ"){
                        professional.dynamicMeyersBriggsPercentage = 37
                    }
                    if (professional.companyMBTIResponse === "ENFJ"){
                        professional.dynamicMeyersBriggsPercentage = 31
                    }
                    if (professional.companyMBTIResponse === "INFJ"){
                        professional.dynamicMeyersBriggsPercentage = 25
                    }
                    if (professional.companyMBTIResponse === "ISFP"){
                        professional.dynamicMeyersBriggsPercentage = 19
                    }
                    if (professional.companyMBTIResponse === "INTJ"){
                        professional.dynamicMeyersBriggsPercentage = 12
                    }
                    if (professional.companyMBTIResponse === "ENTJ"){
                        professional.dynamicMeyersBriggsPercentage = 6
                    }
                })
                break;
            case "ENFJ":
                reduxProfArray.forEach(professional => {
                    if (professional.companyMBTIResponse === "ISTP"){
                        professional.dynamicMeyersBriggsPercentage = 100
                    }
                    if (professional.companyMBTIResponse === "INTP"){
                        professional.dynamicMeyersBriggsPercentage = 94
                    }
                    if (professional.companyMBTIResponse === "ESTP"){
                        professional.dynamicMeyersBriggsPercentage = 87
                    }
                    if (professional.companyMBTIResponse === "ESFP"){
                        professional.dynamicMeyersBriggsPercentage = 81
                    }
                    if (professional.companyMBTIResponse === "ENFJ"){
                        professional.dynamicMeyersBriggsPercentage = 75
                    }
                    if (professional.companyMBTIResponse === "INFP"){
                        professional.dynamicMeyersBriggsPercentage = 69
                    }
                    if (professional.companyMBTIResponse === "ISFP"){
                        professional.dynamicMeyersBriggsPercentage = 63
                    }
                    if (professional.companyMBTIResponse === "ENTP"){
                        professional.dynamicMeyersBriggsPercentage = 56
                    }
                    if (professional.companyMBTIResponse === "INTJ"){
                        professional.dynamicMeyersBriggsPercentage = 50
                    }
                    if (professional.companyMBTIResponse === "ESFJ"){
                        professional.dynamicMeyersBriggsPercentage = 44
                    }
                    if (professional.companyMBTIResponse === "INFJ"){
                        professional.dynamicMeyersBriggsPercentage = 37
                    }
                    if (professional.companyMBTIResponse === "ENFP"){
                        professional.dynamicMeyersBriggsPercentage = 31
                    }
                    if (professional.companyMBTIResponse === "ENTJ"){
                        professional.dynamicMeyersBriggsPercentage = 25
                    }
                    if (professional.companyMBTIResponse === "ISFJ"){
                        professional.dynamicMeyersBriggsPercentage = 19
                    }
                    if (professional.companyMBTIResponse === "ESTJ"){
                        professional.dynamicMeyersBriggsPercentage = 12
                    }
                    if (professional.companyMBTIResponse === "ISTJ"){
                        professional.dynamicMeyersBriggsPercentage = 6
                    }
                })
                break;
            case "ENFP":
                reduxProfArray.forEach(professional => {
                    if (professional.companyMBTIResponse === "ISTJ"){
                        professional.dynamicMeyersBriggsPercentage = 100
                    }
                    if (professional.companyMBTIResponse === "ISFJ"){
                        professional.dynamicMeyersBriggsPercentage = 94
                    }
                    if (professional.companyMBTIResponse === "ESFJ"){
                        professional.dynamicMeyersBriggsPercentage = 87
                    }
                    if (professional.companyMBTIResponse === "ESTJ"){
                        professional.dynamicMeyersBriggsPercentage = 81
                    }
                    if (professional.companyMBTIResponse === "INFJ"){
                        professional.dynamicMeyersBriggsPercentage = 75
                    }
                    if (professional.companyMBTIResponse === "INTJ"){
                        professional.dynamicMeyersBriggsPercentage = 69
                    }
                    if (professional.companyMBTIResponse === "ENTJ"){
                        professional.dynamicMeyersBriggsPercentage = 63
                    }
                    if (professional.companyMBTIResponse === "ISFP"){
                        professional.dynamicMeyersBriggsPercentage = 56
                    }
                    if (professional.companyMBTIResponse === "ENFP"){
                        professional.dynamicMeyersBriggsPercentage = 50
                    }
                    if (professional.companyMBTIResponse === "INTP"){
                        professional.dynamicMeyersBriggsPercentage = 44
                    }
                    if (professional.companyMBTIResponse === "INFP"){
                        professional.dynamicMeyersBriggsPercentage = 37
                    }
                    if (professional.companyMBTIResponse === "ENFJ"){
                        professional.dynamicMeyersBriggsPercentage = 31
                    }
                    if (professional.companyMBTIResponse === "ENTP"){
                        professional.dynamicMeyersBriggsPercentage = 25
                    }
                    if (professional.companyMBTIResponse === "ESFP"){
                        professional.dynamicMeyersBriggsPercentage = 19
                    }
                    if (professional.companyMBTIResponse === "ESTP"){
                        professional.dynamicMeyersBriggsPercentage = 12
                    }
                    if (professional.companyMBTIResponse === "ISTP"){
                        professional.dynamicMeyersBriggsPercentage = 6
                    }
                })
                break;
            case "INFJ":
                reduxProfArray.forEach(professional => {
                    if (professional.companyMBTIResponse === "ESTP"){
                        professional.dynamicMeyersBriggsPercentage = 100
                    }
                    if (professional.companyMBTIResponse === "ESFP"){
                        professional.dynamicMeyersBriggsPercentage = 94
                    }
                    if (professional.companyMBTIResponse === "ISTP"){
                        professional.dynamicMeyersBriggsPercentage = 87
                    }
                    if (professional.companyMBTIResponse === "INTP"){
                        professional.dynamicMeyersBriggsPercentage = 81
                    }
                    if (professional.companyMBTIResponse === "ENFP"){
                        professional.dynamicMeyersBriggsPercentage = 75
                    }
                    if (professional.companyMBTIResponse === "ENTP"){
                        professional.dynamicMeyersBriggsPercentage = 69
                    }
                    if (professional.companyMBTIResponse === "INTJ"){
                        professional.dynamicMeyersBriggsPercentage = 63
                    }
                    if (professional.companyMBTIResponse === "ENTJ"){
                        professional.dynamicMeyersBriggsPercentage = 56
                    }
                    if (professional.companyMBTIResponse === "INFJ"){
                        professional.dynamicMeyersBriggsPercentage = 50
                    }
                    if (professional.companyMBTIResponse === "ISFP"){
                        professional.dynamicMeyersBriggsPercentage = 44
                    }
                    if (professional.companyMBTIResponse === "ENFJ"){
                        professional.dynamicMeyersBriggsPercentage = 37
                    }
                    if (professional.companyMBTIResponse === "ESFJ"){
                        professional.dynamicMeyersBriggsPercentage = 31
                    }
                    if (professional.companyMBTIResponse === "ISFJ"){
                        professional.dynamicMeyersBriggsPercentage = 25
                    }
                    if (professional.companyMBTIResponse === "INFP"){
                        professional.dynamicMeyersBriggsPercentage = 19
                    }
                    if (professional.companyMBTIResponse === "ISTJ"){
                        professional.dynamicMeyersBriggsPercentage = 12
                    }
                    if (professional.companyMBTIResponse === "ESTJ"){
                        professional.dynamicMeyersBriggsPercentage = 6
                    }
                })
                break;
            case "INFP":
                reduxProfArray.forEach(professional => {
                    if (professional.companyMBTIResponse === "ESTJ"){
                        professional.dynamicMeyersBriggsPercentage = 100
                    }
                    if (professional.companyMBTIResponse === "ENTJ"){
                        professional.dynamicMeyersBriggsPercentage = 94
                    }
                    if (professional.companyMBTIResponse === "INTJ"){
                        professional.dynamicMeyersBriggsPercentage = 87
                    }
                    if (professional.companyMBTIResponse === "ISTJ"){
                        professional.dynamicMeyersBriggsPercentage = 81
                    }
                    if (professional.companyMBTIResponse === "ENFJ"){
                        professional.dynamicMeyersBriggsPercentage = 75
                    }
                    if (professional.companyMBTIResponse === "ESFJ"){
                        professional.dynamicMeyersBriggsPercentage = 69
                    }
                    if (professional.companyMBTIResponse === "ENTP"){
                        professional.dynamicMeyersBriggsPercentage = 63
                    }
                    if (professional.companyMBTIResponse === "INFP"){
                        professional.dynamicMeyersBriggsPercentage = 56
                    }
                    if (professional.companyMBTIResponse === "ISFJ"){
                        professional.dynamicMeyersBriggsPercentage = 50
                    }
                    if (professional.companyMBTIResponse === "INTP"){
                        professional.dynamicMeyersBriggsPercentage = 44
                    }
                    if (professional.companyMBTIResponse === "ESFP"){
                        professional.dynamicMeyersBriggsPercentage = 37
                    }
                    if (professional.companyMBTIResponse === "ENFP"){
                        professional.dynamicMeyersBriggsPercentage = 31
                    }
                    if (professional.companyMBTIResponse === "ISFP"){
                        professional.dynamicMeyersBriggsPercentage = 25
                    }
                    if (professional.companyMBTIResponse === "INFJ"){
                        professional.dynamicMeyersBriggsPercentage = 19
                    }
                    if (professional.companyMBTIResponse === "ISTP"){
                        professional.dynamicMeyersBriggsPercentage = 12
                    }
                    if (professional.companyMBTIResponse === "ESTP"){
                        professional.dynamicMeyersBriggsPercentage = 6
                    }
                })
                break;
            case "ESTP":
                reduxProfArray.forEach(professional => {
                    if (professional.companyMBTIResponse === "INFJ"){
                        professional.dynamicMeyersBriggsPercentage = 100
                    }
                    if (professional.companyMBTIResponse === "INTJ"){
                        professional.dynamicMeyersBriggsPercentage = 94
                    }
                    if (professional.companyMBTIResponse === "ENFJ"){
                        professional.dynamicMeyersBriggsPercentage = 87
                    }
                    if (professional.companyMBTIResponse === "ENTJ"){
                        professional.dynamicMeyersBriggsPercentage = 81
                    }
                    if (professional.companyMBTIResponse === "ISFJ"){
                        professional.dynamicMeyersBriggsPercentage = 75
                    }
                    if (professional.companyMBTIResponse === "ISFP"){
                        professional.dynamicMeyersBriggsPercentage = 69
                    }
                    if (professional.companyMBTIResponse === "ISTJ"){
                        professional.dynamicMeyersBriggsPercentage = 63
                    }
                    if (professional.companyMBTIResponse === "ESFJ"){
                        professional.dynamicMeyersBriggsPercentage = 56
                    }
                    if (professional.companyMBTIResponse === "ESTP"){
                        professional.dynamicMeyersBriggsPercentage = 50
                    }
                    if (professional.companyMBTIResponse === "ISFP"){
                        professional.dynamicMeyersBriggsPercentage = 44
                    }
                    if (professional.companyMBTIResponse === "ESFP"){
                        professional.dynamicMeyersBriggsPercentage = 37
                    }
                    if (professional.companyMBTIResponse === "INTP"){
                        professional.dynamicMeyersBriggsPercentage = 31
                    }
                    if (professional.companyMBTIResponse === "ENTP"){
                        professional.dynamicMeyersBriggsPercentage = 25
                    }
                    if (professional.companyMBTIResponse === "ESTJ"){
                        professional.dynamicMeyersBriggsPercentage = 19
                    }
                    if (professional.companyMBTIResponse === "ENFP"){
                        professional.dynamicMeyersBriggsPercentage = 12
                    }
                    if (professional.companyMBTIResponse === "INFP"){
                        professional.dynamicMeyersBriggsPercentage = 6
                    }
                })
                break;
            case "ESFP":
                reduxProfArray.forEach(professional => {
                    if (professional.companyMBTIResponse === "INTJ"){
                        professional.dynamicMeyersBriggsPercentage = 100
                    }
                    if (professional.companyMBTIResponse === "INFJ"){
                        professional.dynamicMeyersBriggsPercentage = 94
                    }
                    if (professional.companyMBTIResponse === "ENTJ"){
                        professional.dynamicMeyersBriggsPercentage = 87
                    }
                    if (professional.companyMBTIResponse === "ENFJ"){
                        professional.dynamicMeyersBriggsPercentage = 81
                    }
                    if (professional.companyMBTIResponse === "ESTJ"){
                        professional.dynamicMeyersBriggsPercentage = 75
                    }
                    if (professional.companyMBTIResponse === "ISTJ"){
                        professional.dynamicMeyersBriggsPercentage = 69
                    }
                    if (professional.companyMBTIResponse === "ISFJ"){
                        professional.dynamicMeyersBriggsPercentage = 63
                    }
                    if (professional.companyMBTIResponse === "ISFP"){
                        professional.dynamicMeyersBriggsPercentage = 56
                    }
                    if (professional.companyMBTIResponse === "ISTP"){
                        professional.dynamicMeyersBriggsPercentage = 50
                    }
                    if (professional.companyMBTIResponse === "INFP"){
                        professional.dynamicMeyersBriggsPercentage = 44
                    }
                    if (professional.companyMBTIResponse === "ESFP"){
                        professional.dynamicMeyersBriggsPercentage = 37
                    }
                    if (professional.companyMBTIResponse === "ESTP"){
                        professional.dynamicMeyersBriggsPercentage = 31
                    }
                    if (professional.companyMBTIResponse === "ESFJ"){
                        professional.dynamicMeyersBriggsPercentage = 25
                    }
                    if (professional.companyMBTIResponse === "ENFP"){
                        professional.dynamicMeyersBriggsPercentage = 19
                    }
                    if (professional.companyMBTIResponse === "ENTP"){
                        professional.dynamicMeyersBriggsPercentage = 12
                    }
                    if (professional.companyMBTIResponse === "INTP"){
                        professional.dynamicMeyersBriggsPercentage = 6
                    }
                })
                break;
            case "ISTP":
                reduxProfArray.forEach(professional => {
                    if (professional.companyMBTIResponse === "ENFJ"){
                        professional.dynamicMeyersBriggsPercentage = 100
                    }
                    if (professional.companyMBTIResponse === "ESFJ"){
                        professional.dynamicMeyersBriggsPercentage = 94
                    }
                    if (professional.companyMBTIResponse === "INFJ"){
                        professional.dynamicMeyersBriggsPercentage = 87
                    }
                    if (professional.companyMBTIResponse === "ISFJ"){
                        professional.dynamicMeyersBriggsPercentage = 81
                    }
                    if (professional.companyMBTIResponse === "ENTJ"){
                        professional.dynamicMeyersBriggsPercentage = 75
                    }
                    if (professional.companyMBTIResponse === "ESTJ"){
                        professional.dynamicMeyersBriggsPercentage = 69
                    }
                    if (professional.companyMBTIResponse === "ESFP"){
                        professional.dynamicMeyersBriggsPercentage = 63
                    }
                    if (professional.companyMBTIResponse === "ESTP"){
                        professional.dynamicMeyersBriggsPercentage = 56
                    }
                    if (professional.companyMBTIResponse === "INTJ"){
                        professional.dynamicMeyersBriggsPercentage = 50
                    }
                    if (professional.companyMBTIResponse === "ISTP"){
                        professional.dynamicMeyersBriggsPercentage = 44
                    }
                    if (professional.companyMBTIResponse === "INTP"){
                        professional.dynamicMeyersBriggsPercentage = 37
                    }
                    if (professional.companyMBTIResponse === "ENTP"){
                        professional.dynamicMeyersBriggsPercentage = 31
                    }
                    if (professional.companyMBTIResponse === "ISTJ"){
                        professional.dynamicMeyersBriggsPercentage = 25
                    }
                    if (professional.companyMBTIResponse === "ISFP"){
                        professional.dynamicMeyersBriggsPercentage = 19
                    }
                    if (professional.companyMBTIResponse === "INFP"){
                        professional.dynamicMeyersBriggsPercentage = 12
                    }
                    if (professional.companyMBTIResponse === "ENFP"){
                        professional.dynamicMeyersBriggsPercentage = 6
                    }
                })
                break;
            case "ISFP":
                reduxProfArray.forEach(professional => {
                    if (professional.companyMBTIResponse === "ENTJ"){
                        professional.dynamicMeyersBriggsPercentage = 100
                    }
                    if (professional.companyMBTIResponse === "ESTJ"){
                        professional.dynamicMeyersBriggsPercentage = 94
                    }
                    if (professional.companyMBTIResponse === "INTJ"){
                        professional.dynamicMeyersBriggsPercentage = 87
                    }
                    if (professional.companyMBTIResponse === "ISTJ"){
                        professional.dynamicMeyersBriggsPercentage = 81
                    }
                    if (professional.companyMBTIResponse === "ENFJ"){
                        professional.dynamicMeyersBriggsPercentage = 75
                    }
                    if (professional.companyMBTIResponse === "ESFJ"){
                        professional.dynamicMeyersBriggsPercentage = 69
                    }
                    if (professional.companyMBTIResponse === "INFJ"){
                        professional.dynamicMeyersBriggsPercentage = 63
                    }
                    if (professional.companyMBTIResponse === "ESFP"){
                        professional.dynamicMeyersBriggsPercentage = 56
                    }
                    if (professional.companyMBTIResponse === "ISFP"){
                        professional.dynamicMeyersBriggsPercentage = 50
                    }
                    if (professional.companyMBTIResponse === "ESTP"){
                        professional.dynamicMeyersBriggsPercentage = 44
                    }
                    if (professional.companyMBTIResponse === "ENFP"){
                        professional.dynamicMeyersBriggsPercentage = 37
                    }
                    if (professional.companyMBTIResponse === "INFP"){
                        professional.dynamicMeyersBriggsPercentage = 31
                    }
                    if (professional.companyMBTIResponse === "ISTP"){
                        professional.dynamicMeyersBriggsPercentage = 25
                    }
                    if (professional.companyMBTIResponse === "ISFJ"){
                        professional.dynamicMeyersBriggsPercentage = 19
                    }
                    if (professional.companyMBTIResponse === "INTP"){
                        professional.dynamicMeyersBriggsPercentage = 12
                    }
                    if (professional.companyMBTIResponse === "ENTP"){
                        professional.dynamicMeyersBriggsPercentage = 6
                    }
                })
                break;
            default:
                return
        }
    }

    const handleCulturalFilterClick = () => {
        setShowPsychologyFilter(false)
        setShowServiceFilter(false)
        setShowCulturalFilter(true)
    }

    const handlePsychologyFilterClick = () => {
        setShowServiceFilter(false)
        setShowCulturalFilter(false)
        setShowPsychologyFilter(true)
    }

    const handleServiceFilterClick = () => {
        setShowPsychologyFilter(false) 
        setShowCulturalFilter(false)
        setShowServiceFilter(true)
    }

    const handleServicePersonalTrainerA1Click = () => {
        if (servicePersonalTrainerA1){
             // if clicked already and we need to turn off, we need to do the opposite   
             dispatch(actions.toggleServicePersonalTrainerACSMValue(false))
             dispatch(actions.toggleServicePersonalTrainerACEValue(false))
             dispatch(actions.toggleServicePersonalTrainerCrossfitValue(false))
             setServicePersonalTrainerA1(false)
        } else {
             // if unclicked
             setServicePersonalTrainerA1(true)
             dispatch(actions.toggleServicePersonalTrainerACSMValue(true))
             dispatch(actions.toggleServicePersonalTrainerACEValue(true))
             dispatch(actions.toggleServicePersonalTrainerCrossfitValue(true))
        }
    }

    const handleServicePersonalTrainerA2Click = () => {
        if (servicePersonalTrainerA2){
             // if clicked already and we need to turn off, we need to do the opposite   
             dispatch(actions.toggleServicePersonalTrainerACSMValue(false))
             dispatch(actions.toggleServicePersonalTrainerACEValue(false))
             dispatch(actions.toggleServicePersonalTrainerCrossfitValue(false))
             setServicePersonalTrainerA2(false)
        } else {
             // if unclicked
             setServicePersonalTrainerA2(true)
             dispatch(actions.toggleServicePersonalTrainerACSMValue(true))
             dispatch(actions.toggleServicePersonalTrainerACEValue(true))
             dispatch(actions.toggleServicePersonalTrainerCrossfitValue(true))
        }
    }

    const handleServicePersonalTrainerA3Click = () => {
        if (servicePersonalTrainerA3){
             // if clicked already and we need to turn off, we need to do the opposite   
             dispatch(actions.toggleServicePersonalTrainerACSMValue(false))
             dispatch(actions.toggleServicePersonalTrainerACEValue(false))
             dispatch(actions.toggleServicePersonalTrainerCrossfitValue(false))
             dispatch(actions.toggleServicePersonalNASMValue(false))
             setServicePersonalTrainerA3(false)
        } else {
             // if unclicked
             setServicePersonalTrainerA3(true)
             dispatch(actions.toggleServicePersonalTrainerACSMValue(true))
             dispatch(actions.toggleServicePersonalTrainerACEValue(true))
             dispatch(actions.toggleServicePersonalTrainerCrossfitValue(true))
             dispatch(actions.toggleServicePersonalNASMValue(true))
        }
    }

    const handleServicePersonalTrainerA4Click = () => {
        if (servicePersonalTrainerA4){
             // if clicked already and we need to turn off, we need to do the opposite   
             dispatch(actions.toggleServicePersonalNASMValue(false))
             setServicePersonalTrainerA4(false)
        } else {
             // if unclicked
             setServicePersonalTrainerA4(true)
             dispatch(actions.toggleServicePersonalNASMValue(true))
        }
    }

    const handleServicePersonalTrainerA5Click = () => {
        if (servicePersonalTrainerA5){
             // if clicked already and we need to turn off, we need to do the opposite   
             dispatch(actions.toggleServicePersonalNASMValue(false))
             dispatch(actions.toggleServicePersonalTrainerNASMCNCValue(false))
             dispatch(actions.toggleServicePersonalTrainerISSAValue(false))
             dispatch(actions.toggleServicePersonalTrainerPN1Value(false))
             dispatch(actions.toggleServicePersonalTrainerNESTAValue(false))
             dispatch(actions.toggleServicePersonalTrainerAFPAValue(false))
             setServicePersonalTrainerA5(false)
        } else {
             // if unclicked
             setServicePersonalTrainerA5(true)
             dispatch(actions.toggleServicePersonalTrainerNASMCNCValue(true))
             dispatch(actions.toggleServicePersonalNASMValue(true))
             dispatch(actions.toggleServicePersonalTrainerISSAValue(true))
             dispatch(actions.toggleServicePersonalTrainerPN1Value(true))
             dispatch(actions.toggleServicePersonalTrainerNESTAValue(true))
             dispatch(actions.toggleServicePersonalTrainerAFPAValue(true))
        }
    }

    const handleServicePersonalTrainerA6Click = () => {
        if (servicePersonalTrainerA6){
             // if clicked already and we need to turn off, we need to do the opposite   
            dispatch(actions.toggleServicePersonalTrainerCSCSValue(false))
            dispatch(actions.toggleServicePersonalTrainerNSCACPTValue(false))
             setServicePersonalTrainerA6(false)
        } else {
             // if unclicked
             setServicePersonalTrainerA6(true)
             dispatch(actions.toggleServicePersonalTrainerCSCSValue(true))
             dispatch(actions.toggleServicePersonalTrainerNSCACPTValue(true))
        }
    }

    // Search Page Specific Components

    // flatlist row item
    const renderItem = (itemData) => {
        return (
            <View style={styles.profRow}>
                <View style={{height: 80, width: 80, backgroundColor: 'white'}} >
                    <Image style={{height: '100%', width: '100%', resizeMode: 'contain'}} source={{uri: itemData.item.companyProfileImage}} />
                </View>
                <View style={styles.moreInfo}>
                    <MTMediumText style={{borderBottomColor: 'white', borderBottomWidth: 1}}>
                        {itemData.item.companyName}
                    </MTMediumText>
                    <MTMediumText style={{fontSize: 8}} numberOfLines={2} ellipsizeMode='tail'>
                        {itemData.item.companyDescription}
                    </MTMediumText>
                    <MTMediumText style={{fontSize: 8, marginTop: 3}}>
                        Specialties: {itemData.item.companySpecialties.map(spec => spec + ", ")}
                    </MTMediumText>
                    <MTMediumText style={{fontSize: 8, marginTop: 3}}>
                       Certifications: {itemData.item.companyCertifications.map(cert => cert + ", ")}
                    </MTMediumText>
                    <MTMediumText style={{fontSize: 8, marginTop: 3}}>
                       Sodalyt Type: <MTMediumText style={{color: Colors.rugged.primary}}> {itemData.item.sodalytArchetype}</MTMediumText>
                    </MTMediumText>
                <View style={styles.actions}>
                        <MTBoldText style={{fontSize: 10}}>
                            Percentage Match {itemData.item.dynamicMeyersBriggsPercentage}%
                        </MTBoldText>
                        <TouchableOpacity>
                            <MTBoldText style={{fontSize: 10, color: Colors.rugged.primary, marginLeft: 8}}>More Info</MTBoldText>
                        </TouchableOpacity>
                </View>
                </View>
                
            </View>
        )
    }

    const culturalFilterBar = () => {
        return (
            <View style={{height: 200, width: Dimensions.get('window').width, backgroundColor: 'white', paddingTop: 8}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10}}>
                  <MTBoldText style={{color: Colors.ocean.primary}}>Cultural Filters</MTBoldText>
                  <TouchableWithoutFeedback onPress={() => setShowCulturalFilter(false)} style={{justifyContent: 'flex-end'}}><View><MTLightText style={{textAlign: 'right', color: Colors.ocean.primary}}>Save</MTLightText></View></TouchableWithoutFeedback>
                  </View>
                <ScrollView style={{marginHorizontal: 10}}>
                  
                    <MTLightText style={{color: Colors.ocean.primary}}>Language</MTLightText>
                    <CheckBox 
                    checked={filterManager.cultural.language.spanish} 
                    title="Spanish"
                    textStyle={{fontFamily: 'tommy-reg'}} 
                    onPress={() => {
                        const currValue = filterManager.cultural.language.spanish 
                        dispatch(actions.toggleCulturalLanguageSpanishValue(!currValue))
                    }} 
                    checkedColor={Colors.ocean.primary} />
                    <CheckBox 
                    checked={filterManager.cultural.language.chineseMandarin} 
                    title="Chinese-Mandarin"
                    textStyle={{fontFamily: 'tommy-reg'}} 
                    onPress={() => {
                        const currValue = filterManager.cultural.language.chineseMandarin 
                        dispatch(actions.toggleCulturalLanguageChineseMandarinValue(!currValue))
                    }} 
                    checkedColor={Colors.ocean.primary} />
                    <CheckBox 
                    checked={filterManager.cultural.language.french} 
                    title="French"
                    textStyle={{fontFamily: 'tommy-reg'}} 
                    onPress={() => {
                        const currValue = filterManager.cultural.language.french
                        dispatch(actions.toggleCulturalLanguageFrenchValue(!currValue))
                    }} 
                    checkedColor={Colors.ocean.primary} />
                     <CheckBox 
                    checked={filterManager.cultural.language.arabic} 
                    title="Arabic"
                    textStyle={{fontFamily: 'tommy-reg'}} 
                    onPress={() => {
                        const currValue = filterManager.cultural.language.arabic
                        dispatch(actions.toggleCulturalLanguageArabicValue(!currValue))
                    }} 
                    checkedColor={Colors.ocean.primary} />
                    <CheckBox 
                    checked={filterManager.cultural.language.hindi} 
                    title="Hindi"
                    textStyle={{fontFamily: 'tommy-reg'}} 
                    onPress={() => {
                        const currValue = filterManager.cultural.language.hindi
                        dispatch(actions.toggleCulturalLanguageHindiValue(!currValue))
                    }} 
                    checkedColor={Colors.ocean.primary} />
                    <CheckBox 
                    checked={filterManager.cultural.language.portuguese} 
                    title="Portuguese"
                    textStyle={{fontFamily: 'tommy-reg'}} 
                    onPress={() => {
                        const currValue = filterManager.cultural.language.portuguese
                        dispatch(actions.toggleCulturalLanguagePortugueseValue(!currValue))
                    }} 
                    checkedColor={Colors.ocean.primary} />
                    <CheckBox 
                    checked={filterManager.cultural.language.banglaBengali}  
                    title="Bangla/Bengali"
                    textStyle={{fontFamily: 'tommy-reg'}} 
                    onPress={() => {
                        const currValue = filterManager.cultural.language.banglaBengali
                        dispatch(actions.toggleCulturalLanguageBanglaBengaliValue(!currValue))
                    }} 
                    checkedColor={Colors.ocean.primary} />
                    <CheckBox 
                    checked={filterManager.cultural.language.russian}  
                    title="Russian"
                    textStyle={{fontFamily: 'tommy-reg'}} 
                    onPress={() => {
                        const currValue = filterManager.cultural.language.russian
                        dispatch(actions.toggleCulturalLanguageRussianValue(!currValue))
                    }} 
                    checkedColor={Colors.ocean.primary} />
                    <CheckBox 
                    checked={filterManager.cultural.language.japanese}  
                    title="Japanese"
                    textStyle={{fontFamily: 'tommy-reg'}} 
                    onPress={() => {
                        const currValue = filterManager.cultural.language.japanese
                        dispatch(actions.toggleCulturalLanguageJapaneseValue(!currValue))
                    }} 
                    checkedColor={Colors.ocean.primary} />
                    <CheckBox 
                    checked={filterManager.cultural.language.punjabi}  
                    title="Punjabi"
                    textStyle={{fontFamily: 'tommy-reg'}} 
                    onPress={() => {
                        const currValue = filterManager.cultural.language.punjabi
                        dispatch(actions.toggleCulturalLanguagePunjabiValue(!currValue))
                    }} 
                    checkedColor={Colors.ocean.primary} />
                    <MTLightText style={{color: Colors.ocean.primary}}>Religious Preference</MTLightText>
                     <CheckBox 
                    checked={filterManager.cultural.religion.noPreference}  
                    title="No Preference"
                    textStyle={{fontFamily: 'tommy-reg'}} 
                    onPress={() => {
                        const currValue = filterManager.cultural.religion.noPreference
                        dispatch(actions.toggleCulturalReligionNoPrefValue(!currValue))
                    }} 
                    checkedColor={Colors.ocean.primary} />
                    <CheckBox 
                    checked={filterManager.cultural.religion.christianity}  
                    title="Christianity"
                    textStyle={{fontFamily: 'tommy-reg'}} 
                    onPress={() => {
                        const currValue = filterManager.cultural.religion.christianity
                        dispatch(actions.toggleCulturalReligionChristianityValue(!currValue))
                    }} 
                    checkedColor={Colors.ocean.primary} />
                    <CheckBox 
                    checked={filterManager.cultural.religion.judaism}  
                    title="Judaism"
                    textStyle={{fontFamily: 'tommy-reg'}} 
                    onPress={() => {
                        const currValue = filterManager.cultural.religion.judaism
                        dispatch(actions.toggleCulturalReligionJudaismValue(!currValue))
                    }} 
                    checkedColor={Colors.ocean.primary} />
                    <CheckBox 
                    checked={filterManager.cultural.religion.islam}  
                    title="Islam"
                    textStyle={{fontFamily: 'tommy-reg'}} 
                    onPress={() => {
                        const currValue = filterManager.cultural.religion.islam
                        dispatch(actions.toggleCulturalReligionIslamValue(!currValue))
                    }} 
                    checkedColor={Colors.ocean.primary} />
                    <CheckBox 
                    checked={filterManager.cultural.religion.other}  
                    title="Other"
                    textStyle={{fontFamily: 'tommy-reg'}} 
                    onPress={() => {
                        const currValue = filterManager.cultural.religion.other
                        dispatch(actions.toggleCulturalReligionOtherValue(!currValue))
                    }} 
                    checkedColor={Colors.ocean.primary} />
                    <MTLightText style={{color: Colors.ocean.primary}}>Racial Identity</MTLightText>
                    <CheckBox 
                    checked={filterManager.cultural.race.hispanic}  
                    title="Hispanic"
                    textStyle={{fontFamily: 'tommy-reg'}} 
                    onPress={() => {
                        const currValue = filterManager.cultural.race.hispanic
                        dispatch(actions.toggleCulturalRaceHispanicValue(!currValue))
                    }} 
                    checkedColor={Colors.ocean.primary} />
                    <CheckBox 
                    checked={filterManager.cultural.race.white}  
                    title="White"
                    textStyle={{fontFamily: 'tommy-reg'}} 
                    onPress={() => {
                        const currValue = filterManager.cultural.race.white
                        dispatch(actions.toggleCulturalRaceWhiteValue(!currValue))
                    }} 
                    checkedColor={Colors.ocean.primary} />
                    <CheckBox 
                    checked={filterManager.cultural.race.black}  
                    title="Black"
                    textStyle={{fontFamily: 'tommy-reg'}} 
                    onPress={() => {
                        const currValue = filterManager.cultural.race.black
                        dispatch(actions.toggleCulturalRaceBlackValue(!currValue))
                    }} 
                    checkedColor={Colors.ocean.primary} />
                    <CheckBox 
                    checked={filterManager.cultural.race.asian}  
                    title="Asian"
                    textStyle={{fontFamily: 'tommy-reg'}} 
                    onPress={() => {
                        const currValue = filterManager.cultural.race.asian
                        dispatch(actions.toggleCulturalRaceAsianValue(!currValue))
                    }} 
                    checkedColor={Colors.ocean.primary} />
                    <CheckBox 
                    checked={filterManager.cultural.race.nativeAmerican}  
                    title="Native American"
                    textStyle={{fontFamily: 'tommy-reg'}} 
                    onPress={() => {
                        const currValue = filterManager.cultural.race.nativeAmerican
                        dispatch(actions.toggleCulturalRaceNativeAmericanValue(!currValue))
                    }} 
                    checkedColor={Colors.ocean.primary} />
                    <CheckBox 
                    checked={filterManager.cultural.race.pacificIslander}  
                    title="Pacific Islander"
                    textStyle={{fontFamily: 'tommy-reg'}} 
                    onPress={() => {
                        const currValue = filterManager.cultural.race.nativeAmerican
                        dispatch(actions.toggleCulturalRaceNativeAmericanValue(!currValue))
                    }} 
                    checkedColor={Colors.ocean.primary} />
                     <CheckBox 
                    checked={filterManager.cultural.race.asianSubcontinent}  
                    title="Asian Subcontinent"
                    textStyle={{fontFamily: 'tommy-reg'}} 
                    onPress={() => {
                        const currValue = filterManager.cultural.race.asianSubcontinent
                        dispatch(actions.toggleCulturalRaceAsianSubValue(!currValue))
                    }} 
                    checkedColor={Colors.ocean.primary} />
                <MTLightText style={{color: Colors.ocean.primary}}>LGBTQ Supportive</MTLightText>
                    <CheckBox 
                    checked={filterManager.cultural.lgbtq.supportive}  
                    title="LGBTQ Supportive"
                    textStyle={{fontFamily: 'tommy-reg'}} 
                    onPress={() => {
                        const currValue = filterManager.cultural.lgbtq.supportive
                        dispatch(actions.toggleCulturalLGBTQSupportiveValue(!currValue))
                    }} 
                    checkedColor={Colors.ocean.primary} />
                    </ScrollView>
            </View>
        )
    }

    const serviceFilterBar = () => {
        return (
            <View style={{height: 200, width: Dimensions.get('window').width, backgroundColor: 'white'}}>
                      
                      {/* OUTSIDE SCROLL VIEW */}
                       <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10}}>
                            <MTBoldText style={{color: Colors.ocean.primary}}>Service Filters</MTBoldText>
                            <TouchableWithoutFeedback onPress={() => setShowServiceFilter(false)} style={{justifyContent: 'flex-end'}}>
                                <View>
                                    <MTLightText style={{textAlign: 'right', color: Colors.ocean.primary}}>Save</MTLightText>
                                </View>
                            </TouchableWithoutFeedback>
                         </View>
                            
                            <ScrollView style={{marginHorizontal: 10}}>      
                            {/* Personal Trainer Section */}
                            <MTLightText style={{color: Colors.ocean.primary}}>Personal Trainer Filters</MTLightText>
                           
                            <CheckBox 
                            checked={filterManager.service.personalTrainer.traumaInformedPractitioner} 
                            title="Trauma Informed Practitioner"
                            textStyle={{fontFamily: 'tommy-reg'}} 
                            onPress={() => {
                                const currValue = filterManager.service.personalTrainer.traumaInformedPractitioner
                                dispatch(actions.toggleServicePersonalTrainerTraumaIPValue(!currValue))
                            }} 
                            checkedColor={Colors.ocean.primary} />

                            <MTLightText style={{color: Colors.ocean.primary}}>Tell us why you want a personal trainer (you can select more than one option)</MTLightText>

                            <CheckBox 
                            checked={servicePersonalTrainerA1} 
                            title="Keep up with my changing life"
                            textStyle={{fontFamily: 'tommy-reg'}} 
                            onPress={handleServicePersonalTrainerA1Click} 
                            checkedColor={Colors.ocean.primary} />

                            <CheckBox 
                            checked={servicePersonalTrainerA2} 
                            title="Show off...at an event, to an ex, etc"
                            textStyle={{fontFamily: 'tommy-reg'}} 
                            onPress={handleServicePersonalTrainerA2Click} 
                            checkedColor={Colors.ocean.primary} />

                            <CheckBox 
                            checked={servicePersonalTrainerA3} 
                            title="Doctor recommended it"
                            textStyle={{fontFamily: 'tommy-reg'}} 
                            onPress={handleServicePersonalTrainerA3Click} 
                            checkedColor={Colors.ocean.primary} />

                            <CheckBox 
                            checked={servicePersonalTrainerA4} 
                            title="Need help with an injury"
                            textStyle={{fontFamily: 'tommy-reg'}} 
                            onPress={handleServicePersonalTrainerA4Click} 
                            checkedColor={Colors.ocean.primary} />

                            <CheckBox
                            checked={servicePersonalTrainerA5} 
                            title="Diet and Nutrition"
                            textStyle={{fontFamily: 'tommy-reg'}} 
                            onPress={handleServicePersonalTrainerA5Click} 
                            checkedColor={Colors.ocean.primary} />

                            <CheckBox
                            checked={servicePersonalTrainerA6} 
                            title="I'd like to be a little bigger, faster, and stronger."
                            textStyle={{fontFamily: 'tommy-reg'}} 
                            onPress={handleServicePersonalTrainerA6Click} 
                            checkedColor={Colors.ocean.primary} />


                            {/* Meeting Experience Section */}
                            <MTLightText style={{color: Colors.ocean.primary}}>Meeting Experience</MTLightText>

                            <CheckBox 
                            checked={filterManager.service.meetingExperience.virtual} 
                            title="Virtual"
                            textStyle={{fontFamily: 'tommy-reg'}} 
                            onPress={() => {
                                const currValue = filterManager.service.meetingExperience.virtual
                                dispatch(actions.toggleServiceMeetingExpVirtualValue(!currValue))
                            }} 
                            checkedColor={Colors.ocean.primary} />

                            <CheckBox 
                            checked={filterManager.service.meetingExperience.inPerson} 
                            title="In Person"
                            textStyle={{fontFamily: 'tommy-reg'}} 
                            onPress={() => {
                                const currValue = filterManager.service.meetingExperience.inPerson
                                dispatch(actions.toggleServiceMeetingExpInPersonValue(!currValue))
                            }} 
                            checkedColor={Colors.ocean.primary} />

                             <CheckBox 
                            checked={filterManager.service.meetingExperience.noPref} 
                            title="Either is fine"
                            textStyle={{fontFamily: 'tommy-reg'}} 
                            onPress={() => {
                                const currValue = filterManager.service.meetingExperience.noPref
                                dispatch(actions.toggleServiceMeetingExpEitherValue(!currValue))
                            }} 
                            checkedColor={Colors.ocean.primary} />

                            {/* Distance Settings */}
                            <MTLightText style={{color: Colors.ocean.primary}}>Distance Settings</MTLightText>
                            
                            <CheckBox 
                            checked={filterManager.service.distance.within5Miles} 
                            title="Within 5 Miles"
                            textStyle={{fontFamily: 'tommy-reg'}} 
                            onPress={() => {
                                const currValue = filterManager.service.distance.within5Miles
                                dispatch(actions.toggleServiceDistanceWithin5Miles(!currValue))
                            }} 
                            checkedColor={Colors.ocean.primary} />
                            
                            <CheckBox 
                            checked={filterManager.service.distance.within10Miles} 
                            title="Within 10 Miles"
                            textStyle={{fontFamily: 'tommy-reg'}} 
                            onPress={() => {
                                const currValue = filterManager.service.distance.within10Miles
                                dispatch(actions.toggleServiceDistanceWithin10Miles(!currValue))
                            }} 
                            checkedColor={Colors.ocean.primary} />
                           
                            <CheckBox 
                            checked={filterManager.service.distance.within20Miles} 
                            title="Within 20 Miles"
                            textStyle={{fontFamily: 'tommy-reg'}} 
                            onPress={() => {
                                const currValue = filterManager.service.distance.within20Miles
                                dispatch(actions.toggleServiceDistanceWithin20Miles(!currValue))
                            }} 
                            checkedColor={Colors.ocean.primary} />
                            
                             <CheckBox 
                            checked={filterManager.service.distance.within50Miles} 
                            title="Within 50 Miles"
                            textStyle={{fontFamily: 'tommy-reg'}} 
                            onPress={() => {
                                const currValue = filterManager.service.distance.within50Miles
                                dispatch(actions.toggleServiceDistanceWithin50Miles(!currValue))
                            }} 
                            checkedColor={Colors.ocean.primary} />

                             {/*  Price Settings */}
                             <MTLightText style={{color: Colors.ocean.primary}}>Price Settings</MTLightText>
                            
                             <MTLightText style={{color: Colors.ocean.primary}}>Are you looking to pay per session, or in block rates?</MTLightText>
                             <CheckBox 
                            checked={filterManager.service.pricingRange.showHourly} 
                            title="Hourly"
                            textStyle={{fontFamily: 'tommy-reg'}} 
                            onPress={() => {
                                const currValue = filterManager.service.pricingRange.showHourly
                                dispatch(actions.toggleServicePricingRangeShowHourly(!currValue))
                            }} 
                            checkedColor={Colors.ocean.primary} />
                            {filterManager.service.pricingRange.showHourly ? <View>
                              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                  <MTBoldText style={{color: Colors.ocean.primary, fontSize: 14}}>Min</MTBoldText>
                                  <Input placeholder={filterManager.service.pricingRange.hourly.floor.toString()} style={{width: '10%', marginLeft: 5}} keyboardType="numeric" value={filterManager.service.pricingRange.hourly.floor} onChangeText={(textInput) => dispatch(actions.setServicePricingRangeNewHourlyFloorValue(textInput))}/>
                                  </View>      
                                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                  <MTBoldText style={{color: Colors.ocean.primary, fontSize: 14}}>Max</MTBoldText>
                                  <Input placeholder={filterManager.service.pricingRange.hourly.ceil.toString()} style={{width: '10%', marginLeft: 5}} keyboardType="numeric" value={filterManager.service.pricingRange.hourly.ceil} onChangeText={(textInput) => dispatch(actions.setServicePricingRangeNewHourlyCeilValue(textInput))}/>
                                  </View>      
                            </View> : null}
                            
                            <CheckBox 
                            checked={filterManager.service.pricingRange.packageDeals} 
                            title="Package Deals"
                            textStyle={{fontFamily: 'tommy-reg'}} 
                            onPress={() => {
                                const currValue = filterManager.service.pricingRange.packageDeals
                                dispatch(actions.toggleServicePricingRangePackageDeal(!currValue))
                            }} 
                            checkedColor={Colors.ocean.primary} />
                             
                              <CheckBox 
                            checked={filterManager.service.pricingRange.instantQuote} 
                            title="Instant Quote Available"
                            textStyle={{fontFamily: 'tommy-reg'}} 
                            onPress={() => {
                                const currValue = filterManager.service.pricingRange.instantQuote
                                dispatch(actions.toggleServicePricingRangeInstantQuoteAvailable(!currValue))
                            }} 
                            checkedColor={Colors.ocean.primary} />
                             
                              <CheckBox 
                            checked={filterManager.service.pricingRange.sodalytDiscount} 
                            title="Soadlyt Discount Available"
                            textStyle={{fontFamily: 'tommy-reg'}} 
                            onPress={() => {
                                const currValue = filterManager.service.pricingRange.sodalytDiscount
                                dispatch(actions.toggleServicePricingRangeSodalytDiscountAvailable(!currValue))
                            }} 
                            checkedColor={Colors.ocean.primary} />

                            {/* Corporate Sustainability Response */}
                            <MTLightText style={{color: Colors.ocean.primary}}>Ethics</MTLightText>
                             
                             <CheckBox 
                            checked={filterManager.service.corporateSustainabilityPolicy} 
                            title="Corporate Sustainability Policy"
                            textStyle={{fontFamily: 'tommy-reg'}} 
                            onPress={() => {
                                const currValue = filterManager.service.corporateSustainabilityPolicy
                                dispatch(actions.toggleServiceCorporateSustainabilityPolicy(!currValue))
                            }} 
                            checkedColor={Colors.ocean.primary} />
                            </ScrollView>
            </View>
        )
    }
 
    if (reduxProfArray.length > 0){
         generateMBTIPercentage(personalityType)
        assignSodalytTypes(reduxProfArray)
    }
   
    console.log(ProfessionalUserData, "local users")
    console.log(reduxProfArray, "2, redux users")

    return ( 
        <TouchableWithoutFeedback style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
            {/* Above the list content */}
            <View> 
            <View style={styles.searchBarCont}>
                <View style={styles.inputHolder}>
                    <Input style={styles.input} placeholder="Try searching for another professional service" value={newSearchValue} onChangeText={handleNewSearchInput}/>
                </View>
                <View style={styles.iconHolder}>
                    <Ionicons name="md-search" color="white" size={32} />
                </View>
            </View>
            <View style={styles.filterContainer}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{marginLeft: 8, justifyContent: 'center', marginTop: 3}}> 
                        <MTMediumText style={{fontSize: 14, color: Colors.ocean.primary}}>
                        Sodalyt 
                        </MTMediumText>
                        <MTMediumText style={{fontSize: 14, color: Colors.ocean.primary}}>
                        Verified
                        </MTMediumText>
                        <Switch value={sodalytVerified} onValueChange={newState => setSodalytVerified(newState)} trackColor={{true: Colors.ocean.primary}}/>
                    </View>
                <ScrollView contentContainerStyle={styles.scrollFilters} style={{ marginLeft: 10, flexDirection: 'row', height: 50}}>
                  <TouchableOpacity onPress={handleCulturalFilterClick}>
                      <View style={{borderBottomWidth: 3, borderBottomColor: Colors.vertical.one, borderBottomRightRadius: 3, borderBottomLeftRadius: 3, justifyContent: 'center', alignItems: 'center'}}>
                          <MTMediumText style={{color: Colors.ocean.secondary, fontSize: 20}}>Cultural</MTMediumText>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginLeft: 20}} onPress={handleServiceFilterClick}>
                      <View style={{borderBottomWidth: 3, borderBottomColor: Colors.vertical.one, borderBottomRightRadius: 3, borderBottomLeftRadius: 3, justifyContent: 'center', alignItems: 'center'}}>
                          <MTMediumText style={{color: Colors.ocean.secondary, fontSize: 20}}>Service Specific</MTMediumText>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginLeft: 20}} onPress={handlePsychologyFilterClick}>
                      <View style={{borderBottomWidth: 3, borderBottomColor: Colors.vertical.one, borderBottomRightRadius: 3, borderBottomLeftRadius: 3, justifyContent: 'center', alignItems: 'center'}}>
                          <MTMediumText style={{color: Colors.ocean.secondary, fontSize: 20}}>Psychological</MTMediumText>
                      </View>
                  </TouchableOpacity>
                </ScrollView>
                </View>
                <MTMediumText style={styles.searchInfoText}>
                    Showing results for the term ' {searchedTerm} '
                </MTMediumText>
            </View>
            { showCulturalFilter ? culturalFilterBar() : null}
            { showServiceFilter ? serviceFilterBar() : null}
            { showPsychologyFilter ? <View style={{height: 200, width: Dimensions.get('window').width, backgroundColor: 'white', padding: 10}}>
                  <MTMediumText style={{color: Colors.ocean.primary, fontSize: 12}}>
                        Here at Soadlyt, we've spent a great deal of time perfecting our recipe for pairing customers with professional experts, and cultivating great relationships. However, we understand that sometimes, you may not want to factor personality into your professional expert choice. For those cases, turn the psychology switch off.
                  </MTMediumText>
                  <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 20}}>
                      <MTBoldText style={{color: Colors.ocean.secondary}}>Psychology Matching</MTBoldText>
                      <Switch style={{marginLeft: 5}} value={sodalytTypingActive} onValueChange={(newValue) => setSodalytTypingActive(newValue)} trackColor={{true: Colors.ocean.primary}} />
                  </View>
                <TouchableWithoutFeedback onPress={() => setShowPsychologyFilter(false)} ><View style={{marginTop: 26}}><MTLightText style={{color: Colors.ocean.secondary, textAlign: 'right', fontSize: 12}}>Hide</MTLightText></View></TouchableWithoutFeedback>  
            </View> : null}
            </View>
            {/* list  content */}
            { reduxProfArray.length > 0 ?
                <FlatList data={reduxProfArray.sort((a, b) => {
                    return a.dynamicMeyersBriggsPercentage -b.dynamicMeyersBriggsPercentage
                }).reverse()} keyExtractor={p => p.id} renderItem={renderItem} style={styles.flatList} /> : 
                <View style={{flex: 1, backgroundColor: Colors.ocean.primary}}>
                    <MTBoldText>Loading</MTBoldText>
                </View>
            }
        </View>
        </TouchableWithoutFeedback>
     );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.ocean.primary,
        alignItems: 'center'
    },
    searchBarCont: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.ocean.secondary,
        width: Dimensions.get('window').width,
        height: 50
    },
    inputHolder: {
        width: "80%",
        height: "75%",
        backgroundColor: "white",
        borderRadius: 15,
        justifyContent: 'center'
    },
    iconHolder: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: Colors.ocean.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderBottomWidth: 0,
        marginLeft: 5,
        fontFamily: 'tommy-reg'
    },
    filterContainer: {
        height: 90,
        width: Dimensions.get('window').width,
        backgroundColor: 'white',
    },
    searchInfoText: {
        color: Colors.ocean.primary,
        textAlign: 'right',
        marginHorizontal: 5
    },
    scrollFilters: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    flatList: {
        width: Dimensions.get('window').width
    },
    profRow: {
        width: '100%',
        height: 110,
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
        flexDirection: 'row'
    },
    image: {
        height: 80,
        width: 80
    },
    moreInfo: {
        marginHorizontal: 10,
        width: '75%'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})
 
export default SearchResultScreen;