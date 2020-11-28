import React, { useState } from 'react';
import {View, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity, Button, Image, Switch, FlatList} from 'react-native'
import Colors from '../constants/Colors';
import ProfessionalUserData from '../constants/professionalUserDummyData'
import {Feather, Ionicons} from '@expo/vector-icons'
import Input from '../components/custom/Input'
import MTMediumText from '../components/custom/MTMediumText';
import {useSelector} from 'react-redux' 
import MTBoldText from '../components/custom/MTBoldText';

const SearchResultScreen = (props) => {

    const searchedTerm = useSelector(state => state.search)
    const currentUserDetails = useSelector(state => state.userDetails)
    const [newSearchValue, setNewSearchValue] = useState("")
    const [sodalytVerified, setSodalytVerified] = useState(false)
    const [personalityType, setPersonalityType] = useState(currentUserDetails.MBTI)
    const [sodalytPref, setSodalytPref] = useState(currentUserDetails.sodalytPreference)
    const [showCulturalFilter, setShowCulturalFilter] = useState(false)

    const BuilderTypes = ["INTJ", "INTP", "ENTJ", "ENTP"]
    const VisionaryTypes = ["INFJ", "INFP", "ENFJ", "ENFP"]
    const ChampionTypes = ["ISTJ", "ISFJ", "ESTJ", "ESFJ"]
    const CreatorTypes = ["ISTP", "ISFP", "ESTP", "ESFP"]

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
                ProfessionalUserData.forEach(professional => {
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
                ProfessionalUserData.forEach(professional => {
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
                ProfessionalUserData.forEach(professional => {
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
                ProfessionalUserData.forEach(professional => {
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
                ProfessionalUserData.forEach(professional => {
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
                ProfessionalUserData.forEach(professional => {
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
                ProfessionalUserData.forEach(professional => {
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
                ProfessionalUserData.forEach(professional => {
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
                ProfessionalUserData.forEach(professional => {
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
                ProfessionalUserData.forEach(professional => {
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
                ProfessionalUserData.forEach(professional => {
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
                ProfessionalUserData.forEach(professional => {
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
                ProfessionalUserData.forEach(professional => {
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
                ProfessionalUserData.forEach(professional => {
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
                ProfessionalUserData.forEach(professional => {
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
                ProfessionalUserData.forEach(professional => {
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
                        Specialties: {itemData.item.companySpecialties.map(spec => spec)}
                    </MTMediumText>
                    <MTMediumText style={{fontSize: 8, marginTop: 3}}>
                       Certifications: {itemData.item.companyCertifications.map(cert => cert)}
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

    generateMBTIPercentage(personalityType)
    assignSodalytTypes(ProfessionalUserData)

    console.log(ProfessionalUserData)
    return ( 
        <TouchableWithoutFeedback style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
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
                  <TouchableOpacity onPress={() => {setShowCulturalFilter(prev => !prev)}}>
                      <View style={{borderBottomWidth: 3, borderBottomColor: Colors.vertical.one, borderBottomRightRadius: 3, borderBottomLeftRadius: 3, justifyContent: 'center', alignItems: 'center'}}>
                          <MTMediumText style={{color: Colors.ocean.secondary, fontSize: 20}}>Cultural</MTMediumText>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginLeft: 20}}>
                      <View style={{borderBottomWidth: 3, borderBottomColor: Colors.vertical.one, borderBottomRightRadius: 3, borderBottomLeftRadius: 3, justifyContent: 'center', alignItems: 'center'}}>
                          <MTMediumText style={{color: Colors.ocean.secondary, fontSize: 20}}>Social</MTMediumText>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginLeft: 20}}>
                      <View style={{borderBottomWidth: 3, borderBottomColor: Colors.vertical.one, borderBottomRightRadius: 3, borderBottomLeftRadius: 3, justifyContent: 'center', alignItems: 'center'}}>
                          <MTMediumText style={{color: Colors.ocean.secondary, fontSize: 20}}>Psychological</MTMediumText>
                      </View>
                  </TouchableOpacity>
                </ScrollView>
                </View>
                <MTMediumText style={styles.searchInfoText}>
                        Showing results for the term ""
                </MTMediumText>
            </View>
            { showCulturalFilter ? <View style={{height: 100, width: Dimensions.get('window').width, backgroundColor: 'white'}}>

            </View> : null}
            </View>
                <FlatList data={ProfessionalUserData.sort((a, b) => {
                    return a.dynamicMeyersBriggsPercentage -b.dynamicMeyersBriggsPercentage
                }).reverse()} keyExtractor={p => p.id} renderItem={renderItem} style={styles.flatList} />
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