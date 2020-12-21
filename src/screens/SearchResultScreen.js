import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
  FlatList,
  Alert
} from 'react-native';
import ProfessionalUserData from '../constants/professionalUserDummyData';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../store/actions/actionCreator';
import {CheckBox} from 'react-native-elements';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Loader,
} from 'rn-placeholder';

// STYLE ONLY
import Colors from '../constants/Colors';
import {Ionicons, MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';
import Input from '../components/custom/Input';
import MTMediumText from '../components/custom/MTMediumText';
import MTBoldText from '../components/custom/MTBoldText';
import MTLightText from '../components/custom/MTLightText';

const SearchResultScreen = props => {


  // VARIABLE ASSIGNMENT

  const reduxProfArray = useSelector (state => state.expertArray);
  let filteredProfessionals = [];

  // Currently searched for phrase
  const searchedTerm = useSelector (state => state.search);
  const [newSearchValue, setNewSearchValue] = useState ('');

  // current user preferences returned from last post
  const currentUserDetails = useSelector (state => state.userDetails);
  const [personalityType, setPersonalityType] = useState (
    currentUserDetails.MBTI
  );
  const [sodalytPref, setSodalytPref] = useState (
    currentUserDetails.sodalytPreference
  );

  // Showing Specific Filter Folders
  const [showLanguageFolder, setShowLanguageFolder] = useState(false)
  const [showReligionFolder, setShowReligionFolder] = useState(false)
  const [showRacialIdentityFolder, setShowRacialIdentityFolder] = useState(false)
  const [showLGBTQFolder, setShowLGBTQFolder] = useState(false)

  const [showPersonalTrainerQs, setShowPersonalTrainerQs] = useState(false)
  const [showMeetingExperienceFolder, setShowMeetingExperienceFolder] = useState(false)
  const [showDistanceFolder, setShowDistanceFolder] = useState(false)
  const [showPriceFolder, setShowPriceFolder] = useState(false)
  const [showEthicsFolder, setShowEthicsFolder] = useState(false)

  // filter state management
  const filterManager = useSelector (state => state.filters);
  const [sodalytVerified, setSodalytVerified] = useState (false);
  const [showCulturalFilter, setShowCulturalFilter] = useState (false);
  const [showServiceFilter, setShowServiceFilter] = useState (false);
  const [showPsychologyFilter, setShowPsychologyFilter] = useState (false);
  const [servicePersonalTrainerA1, setServicePersonalTrainerA1] = useState (false);
  const [servicePersonalTrainerA2, setServicePersonalTrainerA2] = useState (false);
  const [servicePersonalTrainerA3, setServicePersonalTrainerA3] = useState (false);
  const [servicePersonalTrainerA4, setServicePersonalTrainerA4] = useState (false);
  const [servicePersonalTrainerA5, setServicePersonalTrainerA5] = useState ( false);
  // const [servicePersonalTrainerA6, setServicePersonalTrainerA6] = useState(false)
  const [sodalytTypingActive, setSodalytTypingActive] = useState (true);
  const [initialLoad, setInitialLoad] = useState (false);

  // REDUX ACTION MANAGEMENT
  const dispatch = useDispatch ();

  // Sodalyt Type Breakdowns
  const BuilderTypes = ['INTJ', 'INTP', 'ENTJ', 'ENTP'];
  const VisionaryTypes = ['INFJ', 'INFP', 'ENFJ', 'ENFP'];
  const ChampionTypes = ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'];
  const CreatorTypes = ['ISTP', 'ISFP', 'ESTP', 'ESFP'];

  // FUNCTIONAL CODE

  const tryCatchFetchForUsers = async function () {
    try {
      let headers = new Headers ();
      headers.append ('Content-Type', 'application/json');

      let content = JSON.stringify ({
        searchTerm: searchedTerm.toLowerCase (),
        currentUserMbti: personalityType,
        currentUserSodalytPref: sodalytPref,
      });

      let requestOptions = {
        method: 'POST',
        headers: headers,
        body: content,
        redirect: 'follow',
      };

      const ENDPOINT =
        'https://3yfa6tf5vj.execute-api.us-east-2.amazonaws.com/demo1/getprofessionals';

      let response = await fetch(ENDPOINT, requestOptions);
      let profUsers = await response.json();
      return profUsers;
    } catch (err) {
      console.log (err);
    }
  };

  const fetchSearchedForUsers = () => {
    let headers = new Headers ();
    headers.append ('Content-Type', 'application/json');

    let content = JSON.stringify ({
      searchTerm: searchedTerm.toLowerCase (),
      currentUserMbti: personalityType,
      currentUserSodalytPref: sodalytPref,
    });

    let requestOptions = {
      method: 'POST',
      headers: headers,
      body: content,
      redirect: 'follow',
    };

    const ENDPOINT = 'https://3yfa6tf5vj.execute-api.us-east-2.amazonaws.com/demo1/getprofessionals';

    fetch (ENDPOINT, requestOptions)
      .then (r => r.json ())
      .then (arrayResponse => {
        dispatch (actions.setSearchedExpertsResponse (arrayResponse));
      })
      .catch (err => console.log (err));
  };

  useEffect (
    () => {
      // fetchSearchedForUsers()
      tryCatchFetchForUsers ().then (profUsers => {
        setInitialLoad (true);
        dispatch (actions.setSearchedExpertsResponse (profUsers));
      });
    },
    [searchedTerm]
  );

  const handleFilterSwitch = () => {
    filteredProfessionals = [...reduxProfArray];
    const copyOfFilters = {...filterManager};

    // Sodalyt Verified

    if (sodalytVerified) {
      filteredProfessionals = filteredProfessionals.filter (
        prof => prof.sodalytVerified
      );
    }

    // Cultural => Language Filters
    if (copyOfFilters.cultural.language.spanish) {
      filteredProfessionals = filteredProfessionals.filter (prof =>
        prof.languagesSpoken.includes ('Spanish')
      );
    }
    if (copyOfFilters.cultural.language.chineseMandarin) {
      filteredProfessionals = filteredProfessionals.filter (prof =>
        prof.languagesSpoken.includes ('Chinese-Mandarin')
      );
    }
    if (copyOfFilters.cultural.language.french) {
      filteredProfessionals = filteredProfessionals.filter (prof =>
        prof.languagesSpoken.includes ('French')
      );
    }
    if (copyOfFilters.cultural.language.arabic) {
      filteredProfessionals = filteredProfessionals.filter (prof =>
        prof.languagesSpoken.includes ('Arabic')
      );
    }
    if (copyOfFilters.cultural.language.hindi) {
      filteredProfessionals = filteredProfessionals.filter (prof =>
        prof.languagesSpoken.includes ('Hindi')
      );
    }
    if (copyOfFilters.cultural.language.portuguese) {
      filteredProfessionals = filteredProfessionals.filter (prof =>
        prof.languagesSpoken.includes ('Portuguese')
      );
    }
    if (copyOfFilters.cultural.language.banglaBengali) {
      filteredProfessionals = filteredProfessionals.filter (prof =>
        prof.languagesSpoken.includes ('Bangla/Bengali')
      );
    }
    if (copyOfFilters.cultural.language.russian) {
      filteredProfessionals = filteredProfessionals.filter (prof =>
        prof.languagesSpoken.includes ('Russian')
      );
    }
    if (copyOfFilters.cultural.language.japanese) {
      filteredProfessionals = filteredProfessionals.filter (prof =>
        prof.languagesSpoken.includes ('Japanese')
      );
    }
    if (copyOfFilters.cultural.language.punjabi) {
      filteredProfessionals = filteredProfessionals.filter (prof =>
        prof.languagesSpoken.includes ('Punjabi')
      );
    }

    // Cultural =>  Religion Filters
    if (copyOfFilters.cultural.religion.noPreference) {
      filteredProfessionals = filteredProfessionals;
    }
    if (copyOfFilters.cultural.religion.christianity) {
      filteredProfessionals = filteredProfessionals.filter (
        prof => prof.religiousPreference === 'Christianity'
      );
    }
    if (copyOfFilters.cultural.religion.judaism) {
      filteredProfessionals = filteredProfessionals.filter (
        prof => prof.religiousPreference === 'Judaism'
      );
    }
    if (copyOfFilters.cultural.religion.islam) {
      filteredProfessionals = filteredProfessionals.filter (
        prof => prof.religiousPreference === 'Islam'
      );
    }
    if (copyOfFilters.cultural.religion.other) {
      filteredProfessionals = filteredProfessionals.filter (
        prof => prof.religiousPreference === 'Other'
      );
    }

    // Cultural => Race Filters
    if (copyOfFilters.cultural.race.hispanic) {
      filteredProfessionals = filteredProfessionals.filter (
        prof => prof.racialIdentity === 'Hispanic'
      );
    }
    if (copyOfFilters.cultural.race.white) {
      filteredProfessionals = filteredProfessionals.filter (
        prof => prof.racialIdentity === 'White'
      );
    }
    if (copyOfFilters.cultural.race.black) {
      filteredProfessionals = filteredProfessionals.filter (
        prof => prof.racialIdentity === 'Black'
      );
    }
    if (copyOfFilters.cultural.race.asian) {
      filteredProfessionals = filteredProfessionals.filter (
        prof => prof.racialIdentity === 'Asian'
      );
    }
    if (copyOfFilters.cultural.race.nativeAmerican) {
      filteredProfessionals = filteredProfessionals.filter (
        prof => prof.racialIdentity === 'Native American'
      );
    }
    if (copyOfFilters.cultural.race.pacificIslander) {
      filteredProfessionals = filteredProfessionals.filter (
        prof => prof.racialIdentity === 'Pacific Islander'
      );
    }
    if (copyOfFilters.cultural.race.asianSubcontinent) {
      filteredProfessionals = filteredProfessionals.filter (
        prof => prof.racialIdentity === 'Asian-subcontinent'
      );
    }

    // Cultural => LGBTQ
    if (copyOfFilters.cultural.lgbtq.supportive) {
      filteredProfessionals = filteredProfessionals.filter (
        prof => prof.lgbtqSupportive
      );
    }

    // Service => Personal Trainer
    if (copyOfFilters.service.personalTrainer.traumaInformedPractitioner) {
      filteredProfessionals = filteredProfessionals;
    }

    if (servicePersonalTrainerA1) {
      filteredProfessionals = filteredProfessionals.filter (prof => {
        if (prof.companyCertifications.includes ('ACSM')) {
          return true;
        } else if (prof.companyCertifications.includes ('ACE')) {
          return true;
        } else if (prof.companyCertifications.includes ('Cross-Fit')) {
          return true;
        } else {
          return false;
        }
      });
    }

    if (servicePersonalTrainerA2) {
      filteredProfessionals = filteredProfessionals.filter (prof => {
        if (prof.companyCertifications.includes ('ACSM')) {
          return true;
        } else if (prof.companyCertifications.includes ('ACE')) {
          return true;
        } else if (prof.companyCertifications.includes ('Cross-Fit')) {
          return true;
        } else {
          return false;
        }
      });
    }

    if (servicePersonalTrainerA3) {
      filteredProfessionals = filteredProfessionals.filter (prof => {
        if (prof.companyCertifications.includes ('ACSM')) {
          return true;
        } else if (prof.companyCertifications.includes ('ACE')) {
          return true;
        } else if (prof.companyCertifications.includes ('Cross-Fit')) {
          return true;
        } else if (prof.companyCertifications.includes ('NASM')) {
          return true;
        } else {
          return false;
        }
      });
    }

    if (servicePersonalTrainerA4) {
      filteredProfessionals = filteredProfessionals.filter (prof => {
        if (prof.companyCertifications.includes ('NASM')) {
          return true;
        } else {
          return false;
        }
      });
    }

    if (servicePersonalTrainerA5) {
      filteredProfessionals = filteredProfessionals.filter (prof => {
        if (prof.companyCertifications.includes ('NASM')) {
          return true;
        } else if (prof.companyCertifications.includes ('NASM-CNC')) {
          return true;
        } else if (prof.companyCertifications.includes ('ISSA')) {
          return true;
        } else if (prof.companyCertifications.includes ('PN1')) {
          return true;
        } else if (prof.companyCertifications.includes ('NESTA')) {
          return true;
        } else if (prof.companyCertifications.includes ('AFPA')) {
          return true;
        } else {
          return false;
        }
      });
    }

    // Service => Meeting Experience

    if (copyOfFilters.service.meetingExperience.noPref) {
      filteredProfessionals = filteredProfessionals;
    }

    if (copyOfFilters.service.meetingExperience.virtual) {
      filteredProfessionals = filteredProfessionals.filter (
        prof => prof.virtualMeetStatus
      );
    }

    if (copyOfFilters.service.meetingExperience.inPerson) {
      filteredProfessionals = filteredProfessionals.filter (
        prof => prof.inPersonMeetStatus
      );
    }

    // Service => Distance
    // When utilizing phone geolocation, we can implement filtering of Distance
    // Stash an alert on those checkboxes

    // Service => Pricing Range
    if (copyOfFilters.service.pricingRange.showHourly) {
      filteredProfessionals = filteredProfessionals.filter (
        prof => prof.pricingModel === 'hourly'
      );
      filteredProfessionals = filteredProfessionals.filter (prof => {
        if (
          parseInt (prof.price) >
          parseInt (copyOfFilters.service.pricingRange.hourly.floor)
        ) {
          return true;
        } else {
          return false;
        }
      });
      filteredProfessionals = filteredProfessionals.filter (prof => {
        if (
          parseInt (prof.price) <
          parseInt (copyOfFilters.service.pricingRange.hourly.ceil)
        ) {
          return true;
        } else {
          return false;
        }
      });
    }

    if (copyOfFilters.service.pricingRange.packageDeals) {
      filteredProfessionals = filteredProfessionals.filter (
        prof => prof.pricingModel === 'package'
      );
    }

    //  No Instant Quote Attribute on the Professional Side yet
    //  No Sodalyt Discount on the Professional Side yet

    // Service => Corporate Sustainability Policy
    if (copyOfFilters.service.corporateSustainabilityPolicy) {
      filteredProfessionals = filteredProfessionals.filter (
        prof => prof.corporateSustainabilityPolicyVerification
      );
    }

    //   return filteredProfessionals
  };

  const handleNewSearchInput = textInput => {
    setNewSearchValue (textInput);
  };

  const assignSodalytTypes = profUserArray => {
    profUserArray.forEach (prof => {
      if (BuilderTypes.includes (prof.companyMBTIResponse)) {
        prof.sodalytArchetype = 'The Builder';
      }
      if (VisionaryTypes.includes (prof.companyMBTIResponse)) {
        prof.sodalytArchetype = 'The Visionary';
      }
      if (ChampionTypes.includes (prof.companyMBTIResponse)) {
        prof.sodalytArchetype = 'The Champion';
      }
      if (CreatorTypes.includes (prof.companyMBTIResponse)) {
        prof.sodalytArchetype = 'The Creator';
      }
    });
  };

  const generateKearseyPercentage = sodalytPref => {
    switch (sodalytPref) {
      default:
        return;
    }
  };

  const generateMBTIPercentage = mbtiType => {
    switch (mbtiType) {
      case 'ENTJ':
        reduxProfArray.forEach (professional => {
          console.log (professional, professional.companyMBTIResponse);
          if (professional.companyMBTIResponse === 'ISFP') {
            professional.dynamicMeyersBriggsPercentage = 100;
          }
          if (professional.companyMBTIResponse === 'INFP') {
            professional.dynamicMeyersBriggsPercentage = 94;
          }
          if (professional.companyMBTIResponse === 'ESFP') {
            professional.dynamicMeyersBriggsPercentage = 87;
          }
          if (professional.companyMBTIResponse === 'ESTP') {
            professional.dynamicMeyersBriggsPercentage = 81;
          }
          if (professional.companyMBTIResponse === 'ISTP') {
            professional.dynamicMeyersBriggsPercentage = 75;
          }
          if (professional.companyMBTIResponse === 'INTP') {
            professional.dynamicMeyersBriggsPercentage = 69;
          }
          if (professional.companyMBTIResponse === 'ENFP') {
            professional.dynamicMeyersBriggsPercentage = 63;
          }
          if (professional.companyMBTIResponse === 'INFJ') {
            professional.dynamicMeyersBriggsPercentage = 56;
          }
          if (professional.companyMBTIResponse === 'INTJ') {
            professional.dynamicMeyersBriggsPercentage = 50;
          }
          if (professional.companyMBTIResponse === 'ENFJ') {
            professional.dynamicMeyersBriggsPercentage = 44;
          }
          if (professional.companyMBTIResponse === 'ISTJ') {
            professional.dynamicMeyersBriggsPercentage = 37;
          }
          if (professional.companyMBTIResponse === 'ENTP') {
            professional.dynamicMeyersBriggsPercentage = 31;
          }
          if (professional.companyMBTIResponse === 'ESTJ') {
            professional.dynamicMeyersBriggsPercentage = 25;
          }
          if (professional.companyMBTIResponse === 'ENTJ') {
            professional.dynamicMeyersBriggsPercentage = 19;
          }
          if (professional.companyMBTIResponse === 'ESFJ') {
            professional.dynamicMeyersBriggsPercentage = 12;
          }
          if (professional.companyMBTIResponse === 'ISFJ') {
            professional.dynamicMeyersBriggsPercentage = 6;
          }
        });
        break;
      case 'ENTP':
        reduxProfArray.forEach (professional => {
          if (professional.companyMBTIResponse === 'ISFJ') {
            professional.dynamicMeyersBriggsPercentage = 100;
          }
          if (professional.companyMBTIResponse === 'ISTJ') {
            professional.dynamicMeyersBriggsPercentage = 94;
          }
          if (professional.companyMBTIResponse === 'ENTP') {
            professional.dynamicMeyersBriggsPercentage = 87;
          }
          if (professional.companyMBTIResponse === 'ESTJ') {
            professional.dynamicMeyersBriggsPercentage = 81;
          }
          if (professional.companyMBTIResponse === 'ESFJ') {
            professional.dynamicMeyersBriggsPercentage = 75;
          }
          if (professional.companyMBTIResponse === 'INFJ') {
            professional.dynamicMeyersBriggsPercentage = 69;
          }
          if (professional.companyMBTIResponse === 'INTJ') {
            professional.dynamicMeyersBriggsPercentage = 63;
          }
          if (professional.companyMBTIResponse === 'INFP') {
            professional.dynamicMeyersBriggsPercentage = 56;
          }
          if (professional.companyMBTIResponse === 'ENFJ') {
            professional.dynamicMeyersBriggsPercentage = 50;
          }
          if (professional.companyMBTIResponse === 'INTP') {
            professional.dynamicMeyersBriggsPercentage = 44;
          }
          if (professional.companyMBTIResponse === 'ISTP') {
            professional.dynamicMeyersBriggsPercentage = 37;
          }
          if (professional.companyMBTIResponse === 'ENFP') {
            professional.dynamicMeyersBriggsPercentage = 31;
          }
          if (professional.companyMBTIResponse === 'ESTP') {
            professional.dynamicMeyersBriggsPercentage = 25;
          }
          if (professional.companyMBTIResponse === 'ENTJ') {
            professional.dynamicMeyersBriggsPercentage = 19;
          }
          if (professional.companyMBTIResponse === 'ESFP') {
            professional.dynamicMeyersBriggsPercentage = 12;
          }
          if (professional.companyMBTIResponse === 'ISFP') {
            professional.dynamicMeyersBriggsPercentage = 6;
          }
        });
        break;
      case 'INTJ':
        reduxProfArray.forEach (professional => {
          if (professional.companyMBTIResponse === 'ESFP') {
            professional.dynamicMeyersBriggsPercentage = 100;
          }
          if (professional.companyMBTIResponse === 'ESTP') {
            professional.dynamicMeyersBriggsPercentage = 94;
          }
          if (professional.companyMBTIResponse === 'ISFP') {
            professional.dynamicMeyersBriggsPercentage = 87;
          }
          if (professional.companyMBTIResponse === 'INFP') {
            professional.dynamicMeyersBriggsPercentage = 81;
          }
          if (professional.companyMBTIResponse === 'INFJ') {
            professional.dynamicMeyersBriggsPercentage = 75;
          }
          if (professional.companyMBTIResponse === 'ENFP') {
            professional.dynamicMeyersBriggsPercentage = 69;
          }
          if (professional.companyMBTIResponse === 'ENTP') {
            professional.dynamicMeyersBriggsPercentage = 63;
          }
          if (professional.companyMBTIResponse === 'ISTP') {
            professional.dynamicMeyersBriggsPercentage = 56;
          }
          if (professional.companyMBTIResponse === 'ENFJ') {
            professional.dynamicMeyersBriggsPercentage = 50;
          }
          if (professional.companyMBTIResponse === 'INTJ') {
            professional.dynamicMeyersBriggsPercentage = 44;
          }
          if (professional.companyMBTIResponse === 'ISTJ') {
            professional.dynamicMeyersBriggsPercentage = 37;
          }
          if (professional.companyMBTIResponse === 'ENTJ') {
            professional.dynamicMeyersBriggsPercentage = 31;
          }
          if (professional.companyMBTIResponse === 'INTP') {
            professional.dynamicMeyersBriggsPercentage = 25;
          }
          if (professional.companyMBTIResponse === 'ESTJ') {
            professional.dynamicMeyersBriggsPercentage = 19;
          }
          if (professional.companyMBTIResponse === 'ISFJ') {
            professional.dynamicMeyersBriggsPercentage = 12;
          }
          if (professional.companyMBTIResponse === 'ESFJ') {
            professional.dynamicMeyersBriggsPercentage = 6;
          }
        });
        break;
      case 'INTP':
        reduxProfArray.forEach (professional => {
          if (professional.companyMBTIResponse === 'ESFJ') {
            professional.dynamicMeyersBriggsPercentage = 100;
          }
          if (professional.companyMBTIResponse === 'ENFJ') {
            professional.dynamicMeyersBriggsPercentage = 94;
          }
          if (professional.companyMBTIResponse === 'ISFJ') {
            professional.dynamicMeyersBriggsPercentage = 87;
          }
          if (professional.companyMBTIResponse === 'INFJ') {
            professional.dynamicMeyersBriggsPercentage = 81;
          }
          if (professional.companyMBTIResponse === 'ESTJ') {
            professional.dynamicMeyersBriggsPercentage = 75;
          }
          if (professional.companyMBTIResponse === 'ISTJ') {
            professional.dynamicMeyersBriggsPercentage = 69;
          }
          if (professional.companyMBTIResponse === 'ENTJ') {
            professional.dynamicMeyersBriggsPercentage = 63;
          }
          if (professional.companyMBTIResponse === 'ENFP') {
            professional.dynamicMeyersBriggsPercentage = 56;
          }
          if (professional.companyMBTIResponse === 'ENTP') {
            professional.dynamicMeyersBriggsPercentage = 50;
          }
          if (professional.companyMBTIResponse === 'INTP') {
            professional.dynamicMeyersBriggsPercentage = 44;
          }
          if (professional.companyMBTIResponse === 'INTJ') {
            professional.dynamicMeyersBriggsPercentage = 37;
          }
          if (professional.companyMBTIResponse === 'ISTP') {
            professional.dynamicMeyersBriggsPercentage = 31;
          }
          if (professional.companyMBTIResponse === 'INFP') {
            professional.dynamicMeyersBriggsPercentage = 25;
          }
          if (professional.companyMBTIResponse === 'ESTP') {
            professional.dynamicMeyersBriggsPercentage = 19;
          }
          if (professional.companyMBTIResponse === 'ISFP') {
            professional.dynamicMeyersBriggsPercentage = 12;
          }
          if (professional.companyMBTIResponse === 'ESFP') {
            professional.dynamicMeyersBriggsPercentage = 6;
          }
        });
        break;
      case 'ESTJ':
        reduxProfArray.forEach (professional => {
          if (professional.companyMBTIResponse === 'INFP') {
            professional.dynamicMeyersBriggsPercentage = 100;
          }
          if (professional.companyMBTIResponse === 'ISFP') {
            professional.dynamicMeyersBriggsPercentage = 94;
          }
          if (professional.companyMBTIResponse === 'INTP') {
            professional.dynamicMeyersBriggsPercentage = 87;
          }
          if (professional.companyMBTIResponse === 'ENTP') {
            professional.dynamicMeyersBriggsPercentage = 81;
          }
          if (professional.companyMBTIResponse === 'ISTP') {
            professional.dynamicMeyersBriggsPercentage = 75;
          }
          if (professional.companyMBTIResponse === 'ESFP') {
            professional.dynamicMeyersBriggsPercentage = 69;
          }
          if (professional.companyMBTIResponse === 'ENFP') {
            professional.dynamicMeyersBriggsPercentage = 63;
          }
          if (professional.companyMBTIResponse === 'ISTJ') {
            professional.dynamicMeyersBriggsPercentage = 56;
          }
          if (professional.companyMBTIResponse === 'ISFJ') {
            professional.dynamicMeyersBriggsPercentage = 50;
          }
          if (professional.companyMBTIResponse === 'ESTJ') {
            professional.dynamicMeyersBriggsPercentage = 44;
          }
          if (professional.companyMBTIResponse === 'ESFJ') {
            professional.dynamicMeyersBriggsPercentage = 37;
          }
          if (professional.companyMBTIResponse === 'INTJ') {
            professional.dynamicMeyersBriggsPercentage = 31;
          }
          if (professional.companyMBTIResponse === 'ENTJ') {
            professional.dynamicMeyersBriggsPercentage = 25;
          }
          if (professional.companyMBTIResponse === 'ESTP') {
            professional.dynamicMeyersBriggsPercentage = 19;
          }
          if (professional.companyMBTIResponse === 'ENFJ') {
            professional.dynamicMeyersBriggsPercentage = 12;
          }
          if (professional.companyMBTIResponse === 'INFJ') {
            professional.dynamicMeyersBriggsPercentage = 6;
          }
        });
        break;
      case 'ESFJ':
        reduxProfArray.forEach (professional => {
          if (professional.companyMBTIResponse === 'INTP') {
            professional.dynamicMeyersBriggsPercentage = 100;
          }
          if (professional.companyMBTIResponse === 'ISTP') {
            professional.dynamicMeyersBriggsPercentage = 94;
          }
          if (professional.companyMBTIResponse === 'ENTP') {
            professional.dynamicMeyersBriggsPercentage = 87;
          }
          if (professional.companyMBTIResponse === 'ENFP') {
            professional.dynamicMeyersBriggsPercentage = 81;
          }
          if (professional.companyMBTIResponse === 'INFP') {
            professional.dynamicMeyersBriggsPercentage = 75;
          }
          if (professional.companyMBTIResponse === 'ISTJ') {
            professional.dynamicMeyersBriggsPercentage = 69;
          }
          if (professional.companyMBTIResponse === 'ESFJ') {
            professional.dynamicMeyersBriggsPercentage = 63;
          }
          if (professional.companyMBTIResponse === 'ESTP') {
            professional.dynamicMeyersBriggsPercentage = 56;
          }
          if (professional.companyMBTIResponse === 'ISFP') {
            professional.dynamicMeyersBriggsPercentage = 50;
          }
          if (professional.companyMBTIResponse === 'ENFJ') {
            professional.dynamicMeyersBriggsPercentage = 44;
          }
          if (professional.companyMBTIResponse === 'ISFJ') {
            professional.dynamicMeyersBriggsPercentage = 37;
          }
          if (professional.companyMBTIResponse === 'INFJ') {
            professional.dynamicMeyersBriggsPercentage = 31;
          }
          if (professional.companyMBTIResponse === 'ESTJ') {
            professional.dynamicMeyersBriggsPercentage = 25;
          }
          if (professional.companyMBTIResponse === 'ESFP') {
            professional.dynamicMeyersBriggsPercentage = 19;
          }
          if (professional.companyMBTIResponse === 'ENTJ') {
            professional.dynamicMeyersBriggsPercentage = 12;
          }
          if (professional.companyMBTIResponse === 'INTJ') {
            professional.dynamicMeyersBriggsPercentage = 6;
          }
        });
        break;
      case 'ISTJ':
        reduxProfArray.forEach (professional => {
          if (professional.companyMBTIResponse === 'ENFP') {
            professional.dynamicMeyersBriggsPercentage = 100;
          }
          if (professional.companyMBTIResponse === 'ENTP') {
            professional.dynamicMeyersBriggsPercentage = 94;
          }
          if (professional.companyMBTIResponse === 'ISFP') {
            professional.dynamicMeyersBriggsPercentage = 87;
          }
          if (professional.companyMBTIResponse === 'INFP') {
            professional.dynamicMeyersBriggsPercentage = 81;
          }
          if (professional.companyMBTIResponse === 'ESTP') {
            professional.dynamicMeyersBriggsPercentage = 75;
          }
          if (professional.companyMBTIResponse === 'ESFP') {
            professional.dynamicMeyersBriggsPercentage = 69;
          }
          if (professional.companyMBTIResponse === 'INTP') {
            professional.dynamicMeyersBriggsPercentage = 63;
          }
          if (professional.companyMBTIResponse === 'ESTJ') {
            professional.dynamicMeyersBriggsPercentage = 56;
          }
          if (professional.companyMBTIResponse === 'ESFJ') {
            professional.dynamicMeyersBriggsPercentage = 50;
          }
          if (professional.companyMBTIResponse === 'ISTJ') {
            professional.dynamicMeyersBriggsPercentage = 44;
          }
          if (professional.companyMBTIResponse === 'INTJ') {
            professional.dynamicMeyersBriggsPercentage = 37;
          }
          if (professional.companyMBTIResponse === 'ISFJ') {
            professional.dynamicMeyersBriggsPercentage = 31;
          }
          if (professional.companyMBTIResponse === 'ISTP') {
            professional.dynamicMeyersBriggsPercentage = 25;
          }
          if (professional.companyMBTIResponse === 'ENTJ') {
            professional.dynamicMeyersBriggsPercentage = 19;
          }
          if (professional.companyMBTIResponse === 'INFJ') {
            professional.dynamicMeyersBriggsPercentage = 12;
          }
          if (professional.companyMBTIResponse === 'ENFJ') {
            professional.dynamicMeyersBriggsPercentage = 6;
          }
        });
        break;
      case 'ISFJ':
        reduxProfArray.forEach (professional => {
          if (professional.companyMBTIResponse === 'ENTP') {
            professional.dynamicMeyersBriggsPercentage = 100;
          }
          if (professional.companyMBTIResponse === 'ENFP') {
            professional.dynamicMeyersBriggsPercentage = 94;
          }
          if (professional.companyMBTIResponse === 'INTP') {
            professional.dynamicMeyersBriggsPercentage = 87;
          }
          if (professional.companyMBTIResponse === 'ISTP') {
            professional.dynamicMeyersBriggsPercentage = 81;
          }
          if (professional.companyMBTIResponse === 'ESFP') {
            professional.dynamicMeyersBriggsPercentage = 75;
          }
          if (professional.companyMBTIResponse === 'ESTP') {
            professional.dynamicMeyersBriggsPercentage = 69;
          }
          if (professional.companyMBTIResponse === 'ESTJ') {
            professional.dynamicMeyersBriggsPercentage = 63;
          }
          if (professional.companyMBTIResponse === 'INFP') {
            professional.dynamicMeyersBriggsPercentage = 56;
          }
          if (professional.companyMBTIResponse === 'ESFJ') {
            professional.dynamicMeyersBriggsPercentage = 50;
          }
          if (professional.companyMBTIResponse === 'ISTJ') {
            professional.dynamicMeyersBriggsPercentage = 44;
          }
          if (professional.companyMBTIResponse === 'ISFJ') {
            professional.dynamicMeyersBriggsPercentage = 37;
          }
          if (professional.companyMBTIResponse === 'ENFJ') {
            professional.dynamicMeyersBriggsPercentage = 31;
          }
          if (professional.companyMBTIResponse === 'INFJ') {
            professional.dynamicMeyersBriggsPercentage = 25;
          }
          if (professional.companyMBTIResponse === 'ISFP') {
            professional.dynamicMeyersBriggsPercentage = 19;
          }
          if (professional.companyMBTIResponse === 'INTJ') {
            professional.dynamicMeyersBriggsPercentage = 12;
          }
          if (professional.companyMBTIResponse === 'ENTJ') {
            professional.dynamicMeyersBriggsPercentage = 6;
          }
        });
        break;
      case 'ENFJ':
        reduxProfArray.forEach (professional => {
          if (professional.companyMBTIResponse === 'ISTP') {
            professional.dynamicMeyersBriggsPercentage = 100;
          }
          if (professional.companyMBTIResponse === 'INTP') {
            professional.dynamicMeyersBriggsPercentage = 94;
          }
          if (professional.companyMBTIResponse === 'ESTP') {
            professional.dynamicMeyersBriggsPercentage = 87;
          }
          if (professional.companyMBTIResponse === 'ESFP') {
            professional.dynamicMeyersBriggsPercentage = 81;
          }
          if (professional.companyMBTIResponse === 'ENFJ') {
            professional.dynamicMeyersBriggsPercentage = 75;
          }
          if (professional.companyMBTIResponse === 'INFP') {
            professional.dynamicMeyersBriggsPercentage = 69;
          }
          if (professional.companyMBTIResponse === 'ISFP') {
            professional.dynamicMeyersBriggsPercentage = 63;
          }
          if (professional.companyMBTIResponse === 'ENTP') {
            professional.dynamicMeyersBriggsPercentage = 56;
          }
          if (professional.companyMBTIResponse === 'INTJ') {
            professional.dynamicMeyersBriggsPercentage = 50;
          }
          if (professional.companyMBTIResponse === 'ESFJ') {
            professional.dynamicMeyersBriggsPercentage = 44;
          }
          if (professional.companyMBTIResponse === 'INFJ') {
            professional.dynamicMeyersBriggsPercentage = 37;
          }
          if (professional.companyMBTIResponse === 'ENFP') {
            professional.dynamicMeyersBriggsPercentage = 31;
          }
          if (professional.companyMBTIResponse === 'ENTJ') {
            professional.dynamicMeyersBriggsPercentage = 25;
          }
          if (professional.companyMBTIResponse === 'ISFJ') {
            professional.dynamicMeyersBriggsPercentage = 19;
          }
          if (professional.companyMBTIResponse === 'ESTJ') {
            professional.dynamicMeyersBriggsPercentage = 12;
          }
          if (professional.companyMBTIResponse === 'ISTJ') {
            professional.dynamicMeyersBriggsPercentage = 6;
          }
        });
        break;
      case 'ENFP':
        reduxProfArray.forEach (professional => {
          if (professional.companyMBTIResponse === 'ISTJ') {
            professional.dynamicMeyersBriggsPercentage = 100;
          }
          if (professional.companyMBTIResponse === 'ISFJ') {
            professional.dynamicMeyersBriggsPercentage = 94;
          }
          if (professional.companyMBTIResponse === 'ESFJ') {
            professional.dynamicMeyersBriggsPercentage = 87;
          }
          if (professional.companyMBTIResponse === 'ESTJ') {
            professional.dynamicMeyersBriggsPercentage = 81;
          }
          if (professional.companyMBTIResponse === 'INFJ') {
            professional.dynamicMeyersBriggsPercentage = 75;
          }
          if (professional.companyMBTIResponse === 'INTJ') {
            professional.dynamicMeyersBriggsPercentage = 69;
          }
          if (professional.companyMBTIResponse === 'ENTJ') {
            professional.dynamicMeyersBriggsPercentage = 63;
          }
          if (professional.companyMBTIResponse === 'ISFP') {
            professional.dynamicMeyersBriggsPercentage = 56;
          }
          if (professional.companyMBTIResponse === 'ENFP') {
            professional.dynamicMeyersBriggsPercentage = 50;
          }
          if (professional.companyMBTIResponse === 'INTP') {
            professional.dynamicMeyersBriggsPercentage = 44;
          }
          if (professional.companyMBTIResponse === 'INFP') {
            professional.dynamicMeyersBriggsPercentage = 37;
          }
          if (professional.companyMBTIResponse === 'ENFJ') {
            professional.dynamicMeyersBriggsPercentage = 31;
          }
          if (professional.companyMBTIResponse === 'ENTP') {
            professional.dynamicMeyersBriggsPercentage = 25;
          }
          if (professional.companyMBTIResponse === 'ESFP') {
            professional.dynamicMeyersBriggsPercentage = 19;
          }
          if (professional.companyMBTIResponse === 'ESTP') {
            professional.dynamicMeyersBriggsPercentage = 12;
          }
          if (professional.companyMBTIResponse === 'ISTP') {
            professional.dynamicMeyersBriggsPercentage = 6;
          }
        });
        break;
      case 'INFJ':
        reduxProfArray.forEach (professional => {
          if (professional.companyMBTIResponse === 'ESTP') {
            professional.dynamicMeyersBriggsPercentage = 100;
          }
          if (professional.companyMBTIResponse === 'ESFP') {
            professional.dynamicMeyersBriggsPercentage = 94;
          }
          if (professional.companyMBTIResponse === 'ISTP') {
            professional.dynamicMeyersBriggsPercentage = 87;
          }
          if (professional.companyMBTIResponse === 'INTP') {
            professional.dynamicMeyersBriggsPercentage = 81;
          }
          if (professional.companyMBTIResponse === 'ENFP') {
            professional.dynamicMeyersBriggsPercentage = 75;
          }
          if (professional.companyMBTIResponse === 'ENTP') {
            professional.dynamicMeyersBriggsPercentage = 69;
          }
          if (professional.companyMBTIResponse === 'INTJ') {
            professional.dynamicMeyersBriggsPercentage = 63;
          }
          if (professional.companyMBTIResponse === 'ENTJ') {
            professional.dynamicMeyersBriggsPercentage = 56;
          }
          if (professional.companyMBTIResponse === 'INFJ') {
            professional.dynamicMeyersBriggsPercentage = 50;
          }
          if (professional.companyMBTIResponse === 'ISFP') {
            professional.dynamicMeyersBriggsPercentage = 44;
          }
          if (professional.companyMBTIResponse === 'ENFJ') {
            professional.dynamicMeyersBriggsPercentage = 37;
          }
          if (professional.companyMBTIResponse === 'ESFJ') {
            professional.dynamicMeyersBriggsPercentage = 31;
          }
          if (professional.companyMBTIResponse === 'ISFJ') {
            professional.dynamicMeyersBriggsPercentage = 25;
          }
          if (professional.companyMBTIResponse === 'INFP') {
            professional.dynamicMeyersBriggsPercentage = 19;
          }
          if (professional.companyMBTIResponse === 'ISTJ') {
            professional.dynamicMeyersBriggsPercentage = 12;
          }
          if (professional.companyMBTIResponse === 'ESTJ') {
            professional.dynamicMeyersBriggsPercentage = 6;
          }
        });
        break;
      case 'INFP':
        reduxProfArray.forEach (professional => {
          if (professional.companyMBTIResponse === 'ESTJ') {
            professional.dynamicMeyersBriggsPercentage = 100;
          }
          if (professional.companyMBTIResponse === 'ENTJ') {
            professional.dynamicMeyersBriggsPercentage = 94;
          }
          if (professional.companyMBTIResponse === 'INTJ') {
            professional.dynamicMeyersBriggsPercentage = 87;
          }
          if (professional.companyMBTIResponse === 'ISTJ') {
            professional.dynamicMeyersBriggsPercentage = 81;
          }
          if (professional.companyMBTIResponse === 'ENFJ') {
            professional.dynamicMeyersBriggsPercentage = 75;
          }
          if (professional.companyMBTIResponse === 'ESFJ') {
            professional.dynamicMeyersBriggsPercentage = 69;
          }
          if (professional.companyMBTIResponse === 'ENTP') {
            professional.dynamicMeyersBriggsPercentage = 63;
          }
          if (professional.companyMBTIResponse === 'INFP') {
            professional.dynamicMeyersBriggsPercentage = 56;
          }
          if (professional.companyMBTIResponse === 'ISFJ') {
            professional.dynamicMeyersBriggsPercentage = 50;
          }
          if (professional.companyMBTIResponse === 'INTP') {
            professional.dynamicMeyersBriggsPercentage = 44;
          }
          if (professional.companyMBTIResponse === 'ESFP') {
            professional.dynamicMeyersBriggsPercentage = 37;
          }
          if (professional.companyMBTIResponse === 'ENFP') {
            professional.dynamicMeyersBriggsPercentage = 31;
          }
          if (professional.companyMBTIResponse === 'ISFP') {
            professional.dynamicMeyersBriggsPercentage = 25;
          }
          if (professional.companyMBTIResponse === 'INFJ') {
            professional.dynamicMeyersBriggsPercentage = 19;
          }
          if (professional.companyMBTIResponse === 'ISTP') {
            professional.dynamicMeyersBriggsPercentage = 12;
          }
          if (professional.companyMBTIResponse === 'ESTP') {
            professional.dynamicMeyersBriggsPercentage = 6;
          }
        });
        break;
      case 'ESTP':
        reduxProfArray.forEach (professional => {
          if (professional.companyMBTIResponse === 'INFJ') {
            professional.dynamicMeyersBriggsPercentage = 100;
          }
          if (professional.companyMBTIResponse === 'INTJ') {
            professional.dynamicMeyersBriggsPercentage = 94;
          }
          if (professional.companyMBTIResponse === 'ENFJ') {
            professional.dynamicMeyersBriggsPercentage = 87;
          }
          if (professional.companyMBTIResponse === 'ENTJ') {
            professional.dynamicMeyersBriggsPercentage = 81;
          }
          if (professional.companyMBTIResponse === 'ISFJ') {
            professional.dynamicMeyersBriggsPercentage = 75;
          }
          if (professional.companyMBTIResponse === 'ISFP') {
            professional.dynamicMeyersBriggsPercentage = 69;
          }
          if (professional.companyMBTIResponse === 'ISTJ') {
            professional.dynamicMeyersBriggsPercentage = 63;
          }
          if (professional.companyMBTIResponse === 'ESFJ') {
            professional.dynamicMeyersBriggsPercentage = 56;
          }
          if (professional.companyMBTIResponse === 'ESTP') {
            professional.dynamicMeyersBriggsPercentage = 50;
          }
          if (professional.companyMBTIResponse === 'ISFP') {
            professional.dynamicMeyersBriggsPercentage = 44;
          }
          if (professional.companyMBTIResponse === 'ESFP') {
            professional.dynamicMeyersBriggsPercentage = 37;
          }
          if (professional.companyMBTIResponse === 'INTP') {
            professional.dynamicMeyersBriggsPercentage = 31;
          }
          if (professional.companyMBTIResponse === 'ENTP') {
            professional.dynamicMeyersBriggsPercentage = 25;
          }
          if (professional.companyMBTIResponse === 'ESTJ') {
            professional.dynamicMeyersBriggsPercentage = 19;
          }
          if (professional.companyMBTIResponse === 'ENFP') {
            professional.dynamicMeyersBriggsPercentage = 12;
          }
          if (professional.companyMBTIResponse === 'INFP') {
            professional.dynamicMeyersBriggsPercentage = 6;
          }
        });
        break;
      case 'ESFP':
        reduxProfArray.forEach (professional => {
          if (professional.companyMBTIResponse === 'INTJ') {
            professional.dynamicMeyersBriggsPercentage = 100;
          }
          if (professional.companyMBTIResponse === 'INFJ') {
            professional.dynamicMeyersBriggsPercentage = 94;
          }
          if (professional.companyMBTIResponse === 'ENTJ') {
            professional.dynamicMeyersBriggsPercentage = 87;
          }
          if (professional.companyMBTIResponse === 'ENFJ') {
            professional.dynamicMeyersBriggsPercentage = 81;
          }
          if (professional.companyMBTIResponse === 'ESTJ') {
            professional.dynamicMeyersBriggsPercentage = 75;
          }
          if (professional.companyMBTIResponse === 'ISTJ') {
            professional.dynamicMeyersBriggsPercentage = 69;
          }
          if (professional.companyMBTIResponse === 'ISFJ') {
            professional.dynamicMeyersBriggsPercentage = 63;
          }
          if (professional.companyMBTIResponse === 'ISFP') {
            professional.dynamicMeyersBriggsPercentage = 56;
          }
          if (professional.companyMBTIResponse === 'ISTP') {
            professional.dynamicMeyersBriggsPercentage = 50;
          }
          if (professional.companyMBTIResponse === 'INFP') {
            professional.dynamicMeyersBriggsPercentage = 44;
          }
          if (professional.companyMBTIResponse === 'ESFP') {
            professional.dynamicMeyersBriggsPercentage = 37;
          }
          if (professional.companyMBTIResponse === 'ESTP') {
            professional.dynamicMeyersBriggsPercentage = 31;
          }
          if (professional.companyMBTIResponse === 'ESFJ') {
            professional.dynamicMeyersBriggsPercentage = 25;
          }
          if (professional.companyMBTIResponse === 'ENFP') {
            professional.dynamicMeyersBriggsPercentage = 19;
          }
          if (professional.companyMBTIResponse === 'ENTP') {
            professional.dynamicMeyersBriggsPercentage = 12;
          }
          if (professional.companyMBTIResponse === 'INTP') {
            professional.dynamicMeyersBriggsPercentage = 6;
          }
        });
        break;
      case 'ISTP':
        reduxProfArray.forEach (professional => {
          if (professional.companyMBTIResponse === 'ENFJ') {
            professional.dynamicMeyersBriggsPercentage = 100;
          }
          if (professional.companyMBTIResponse === 'ESFJ') {
            professional.dynamicMeyersBriggsPercentage = 94;
          }
          if (professional.companyMBTIResponse === 'INFJ') {
            professional.dynamicMeyersBriggsPercentage = 87;
          }
          if (professional.companyMBTIResponse === 'ISFJ') {
            professional.dynamicMeyersBriggsPercentage = 81;
          }
          if (professional.companyMBTIResponse === 'ENTJ') {
            professional.dynamicMeyersBriggsPercentage = 75;
          }
          if (professional.companyMBTIResponse === 'ESTJ') {
            professional.dynamicMeyersBriggsPercentage = 69;
          }
          if (professional.companyMBTIResponse === 'ESFP') {
            professional.dynamicMeyersBriggsPercentage = 63;
          }
          if (professional.companyMBTIResponse === 'ESTP') {
            professional.dynamicMeyersBriggsPercentage = 56;
          }
          if (professional.companyMBTIResponse === 'INTJ') {
            professional.dynamicMeyersBriggsPercentage = 50;
          }
          if (professional.companyMBTIResponse === 'ISTP') {
            professional.dynamicMeyersBriggsPercentage = 44;
          }
          if (professional.companyMBTIResponse === 'INTP') {
            professional.dynamicMeyersBriggsPercentage = 37;
          }
          if (professional.companyMBTIResponse === 'ENTP') {
            professional.dynamicMeyersBriggsPercentage = 31;
          }
          if (professional.companyMBTIResponse === 'ISTJ') {
            professional.dynamicMeyersBriggsPercentage = 25;
          }
          if (professional.companyMBTIResponse === 'ISFP') {
            professional.dynamicMeyersBriggsPercentage = 19;
          }
          if (professional.companyMBTIResponse === 'INFP') {
            professional.dynamicMeyersBriggsPercentage = 12;
          }
          if (professional.companyMBTIResponse === 'ENFP') {
            professional.dynamicMeyersBriggsPercentage = 6;
          }
        });
        break;
      case 'ISFP':
        reduxProfArray.forEach (professional => {
          if (professional.companyMBTIResponse === 'ENTJ') {
            professional.dynamicMeyersBriggsPercentage = 100;
          }
          if (professional.companyMBTIResponse === 'ESTJ') {
            professional.dynamicMeyersBriggsPercentage = 94;
          }
          if (professional.companyMBTIResponse === 'INTJ') {
            professional.dynamicMeyersBriggsPercentage = 87;
          }
          if (professional.companyMBTIResponse === 'ISTJ') {
            professional.dynamicMeyersBriggsPercentage = 81;
          }
          if (professional.companyMBTIResponse === 'ENFJ') {
            professional.dynamicMeyersBriggsPercentage = 75;
          }
          if (professional.companyMBTIResponse === 'ESFJ') {
            professional.dynamicMeyersBriggsPercentage = 69;
          }
          if (professional.companyMBTIResponse === 'INFJ') {
            professional.dynamicMeyersBriggsPercentage = 63;
          }
          if (professional.companyMBTIResponse === 'ESFP') {
            professional.dynamicMeyersBriggsPercentage = 56;
          }
          if (professional.companyMBTIResponse === 'ISFP') {
            professional.dynamicMeyersBriggsPercentage = 50;
          }
          if (professional.companyMBTIResponse === 'ESTP') {
            professional.dynamicMeyersBriggsPercentage = 44;
          }
          if (professional.companyMBTIResponse === 'ENFP') {
            professional.dynamicMeyersBriggsPercentage = 37;
          }
          if (professional.companyMBTIResponse === 'INFP') {
            professional.dynamicMeyersBriggsPercentage = 31;
          }
          if (professional.companyMBTIResponse === 'ISTP') {
            professional.dynamicMeyersBriggsPercentage = 25;
          }
          if (professional.companyMBTIResponse === 'ISFJ') {
            professional.dynamicMeyersBriggsPercentage = 19;
          }
          if (professional.companyMBTIResponse === 'INTP') {
            professional.dynamicMeyersBriggsPercentage = 12;
          }
          if (professional.companyMBTIResponse === 'ENTP') {
            professional.dynamicMeyersBriggsPercentage = 6;
          }
        });
        break;
      default:
        return;
    }
  };

  const handleCulturalFilterClick = () => {
    setShowPsychologyFilter (false);
    setShowServiceFilter (false);
    setShowCulturalFilter (true);
  };

  const handlePsychologyFilterClick = () => {
    setShowServiceFilter (false);
    setShowCulturalFilter (false);
    setShowPsychologyFilter (true);
  };

  const handleServiceFilterClick = () => {
    setShowPsychologyFilter (false);
    setShowCulturalFilter (false);
    setShowServiceFilter (true);
  };

  const handleServicePersonalTrainerA1Click = () => {
    if (servicePersonalTrainerA1) {
      // if clicked already and we need to turn off, we need to do the opposite
      dispatch (actions.toggleServicePersonalTrainerACSMValue (false));
      dispatch (actions.toggleServicePersonalTrainerACEValue (false));
      dispatch (actions.toggleServicePersonalTrainerCrossfitValue (false));
      setServicePersonalTrainerA1 (false);
    } else {
      // if unclicked
      setServicePersonalTrainerA1 (true);
      dispatch (actions.toggleServicePersonalTrainerACSMValue (true));
      dispatch (actions.toggleServicePersonalTrainerACEValue (true));
      dispatch (actions.toggleServicePersonalTrainerCrossfitValue (true));
    }
  };

  const handleServicePersonalTrainerA2Click = () => {
    if (servicePersonalTrainerA2) {
      // if clicked already and we need to turn off, we need to do the opposite
      dispatch (actions.toggleServicePersonalTrainerACSMValue (false));
      dispatch (actions.toggleServicePersonalTrainerACEValue (false));
      dispatch (actions.toggleServicePersonalTrainerCrossfitValue (false));
      setServicePersonalTrainerA2 (false);
    } else {
      // if unclicked
      setServicePersonalTrainerA2 (true);
      dispatch (actions.toggleServicePersonalTrainerACSMValue (true));
      dispatch (actions.toggleServicePersonalTrainerACEValue (true));
      dispatch (actions.toggleServicePersonalTrainerCrossfitValue (true));
    }
  };

  const handleServicePersonalTrainerA3Click = () => {
    if (servicePersonalTrainerA3) {
      // if clicked already and we need to turn off, we need to do the opposite
      dispatch (actions.toggleServicePersonalTrainerACSMValue (false));
      dispatch (actions.toggleServicePersonalTrainerACEValue (false));
      dispatch (actions.toggleServicePersonalTrainerCrossfitValue (false));
      dispatch (actions.toggleServicePersonalNASMValue (false));
      setServicePersonalTrainerA3 (false);
    } else {
      // if unclicked
      setServicePersonalTrainerA3 (true);
      dispatch (actions.toggleServicePersonalTrainerACSMValue (true));
      dispatch (actions.toggleServicePersonalTrainerACEValue (true));
      dispatch (actions.toggleServicePersonalTrainerCrossfitValue (true));
      dispatch (actions.toggleServicePersonalNASMValue (true));
    }
  };

  const handleServicePersonalTrainerA4Click = () => {
    if (servicePersonalTrainerA4) {
      // if clicked already and we need to turn off, we need to do the opposite
      dispatch (actions.toggleServicePersonalNASMValue (false));
      setServicePersonalTrainerA4 (false);
    } else {
      // if unclicked
      setServicePersonalTrainerA4 (true);
      dispatch (actions.toggleServicePersonalNASMValue (true));
    }
  };

  const handleServicePersonalTrainerA5Click = () => {
    if (servicePersonalTrainerA5) {
      // if clicked already and we need to turn off, we need to do the opposite
      dispatch (actions.toggleServicePersonalNASMValue (false));
      dispatch (actions.toggleServicePersonalTrainerNASMCNCValue (false));
      dispatch (actions.toggleServicePersonalTrainerISSAValue (false));
      dispatch (actions.toggleServicePersonalTrainerPN1Value (false));
      dispatch (actions.toggleServicePersonalTrainerNESTAValue (false));
      dispatch (actions.toggleServicePersonalTrainerAFPAValue (false));
      setServicePersonalTrainerA5 (false);
    } else {
      // if unclicked
      setServicePersonalTrainerA5 (true);
      dispatch (actions.toggleServicePersonalTrainerNASMCNCValue (true));
      dispatch (actions.toggleServicePersonalNASMValue (true));
      dispatch (actions.toggleServicePersonalTrainerISSAValue (true));
      dispatch (actions.toggleServicePersonalTrainerPN1Value (true));
      dispatch (actions.toggleServicePersonalTrainerNESTAValue (true));
      dispatch (actions.toggleServicePersonalTrainerAFPAValue (true));
    }
  };

  const handleServicePersonalTrainerA6Click = () => {
    if (servicePersonalTrainerA6) {
      // if clicked already and we need to turn off, we need to do the opposite
      dispatch (actions.toggleServicePersonalTrainerCSCSValue (false));
      dispatch (actions.toggleServicePersonalTrainerNSCACPTValue (false));
      setServicePersonalTrainerA6 (false);
    } else {
      // if unclicked
      setServicePersonalTrainerA6 (true);
      dispatch (actions.toggleServicePersonalTrainerCSCSValue (true));
      dispatch (actions.toggleServicePersonalTrainerNSCACPTValue (true));
    }
  };

  // Search Page Specific Components

  // flatlist row item
  const renderItem = itemData => {
    return (
      <View style={styles.profRow}>
        <View style={{height: 80, width: 80, backgroundColor: 'white'}}>
          <Image
            style={{height: '100%', width: '100%', resizeMode: 'contain'}}
            source={{uri: itemData.item.companyProfileImage}}
          />
        </View>
        <View style={styles.moreInfo}>
          <MTMediumText
            style={{borderBottomColor: 'white', borderBottomWidth: 1}}
          >
            {itemData.item.companyName}
          </MTMediumText>
          <MTMediumText
            style={{fontSize: 8}}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {itemData.item.companyDescription}
          </MTMediumText>
          <MTMediumText style={{fontSize: 8, marginTop: 3}}>
            Specialties:
            {' '}
            {itemData.item.companySpecialties.map (spec => spec + ', ')}
          </MTMediumText>
          <MTMediumText style={{fontSize: 8, marginTop: 3}}>
            Certifications:
            {' '}
            {itemData.item.companyCertifications.map (cert => cert + ', ')}
          </MTMediumText>

          <View style={styles.actions}>
            {sodalytTypingActive
              ? <MTBoldText style={{fontSize: 10}}>
                  Percentage Match
                  {' '}
                  {itemData.item.dynamicMeyersBriggsPercentage}
                  %
                </MTBoldText>
              : null}
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate ({
                  routeName: 'ProfessionalUserShowPage',
                  params: {
                    thisExpert: itemData.item,
                  },
                });
              }}
            >
              <MTBoldText
                style={{
                  fontSize: 10,
                  color: Colors.rugged.primary,
                  marginLeft: 8,
                }}
              >
                CONNECT
              </MTBoldText>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  };

  const culturalFilterBar = () => {
    return (
      <View
        style={{
          height: 200,
          width: Dimensions.get ('window').width,
          backgroundColor: 'white',
          paddingTop: 8,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}
        >
          <MTBoldText style={{color: Colors.ocean.primary}}>
            Cultural Filters
          </MTBoldText>
          <TouchableWithoutFeedback
            onPress={() => setShowCulturalFilter (false)}
            style={{justifyContent: 'flex-end'}}
          >
            <View>
              <MTLightText
                style={{textAlign: 'right', color: Colors.ocean.primary}}
              >
                Save
              </MTLightText>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <MTLightText
          style={{
            fontSize: 10,
            color: Colors.ocean.primary,
            marginHorizontal: 8,
            marginBottom: 5,
          }}
        >
          Cultural options are based upon what is designated in the US Census and what is requested by Sodalyt customers.  Email us if you think of another preference to add which could help people connect more meaningfully.
        </MTLightText>
        <ScrollView style={{marginHorizontal: 10}}>

        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
          <MTBoldText style={{color: Colors.ocean.primary, fontSize: 18}}>
            Language
          </MTBoldText>
         { showLanguageFolder ? 
         <AntDesign name="caretup" size={24} color={Colors.rugged.primary} style={{marginLeft: 10}} onPress={() => setShowLanguageFolder(false)} /> 
         : <AntDesign name="caretdown" size={24} color={Colors.rugged.primary} style={{marginLeft: 10}} onPress={() => setShowLanguageFolder(true)}/> 
         }
        </View>
        { showLanguageFolder ? 
        <View>
          <CheckBox
            checked={filterManager.cultural.language.spanish}
            title="Spanish"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.cultural.language.spanish;
              dispatch (
                actions.toggleCulturalLanguageSpanishValue (!currValue)
              );
            }}
            checkedColor={Colors.ocean.primary}
          />
          <CheckBox
            checked={filterManager.cultural.language.chineseMandarin}
            title="Chinese-Mandarin"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.cultural.language.chineseMandarin;
              dispatch (
                actions.toggleCulturalLanguageChineseMandarinValue (!currValue)
              );
            }}
            checkedColor={Colors.ocean.primary}
          />
          <CheckBox
            checked={filterManager.cultural.language.french}
            title="French"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.cultural.language.french;
              dispatch (actions.toggleCulturalLanguageFrenchValue (!currValue));
            }}
            checkedColor={Colors.ocean.primary}
          />
          <CheckBox
            checked={filterManager.cultural.language.arabic}
            title="Arabic"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.cultural.language.arabic;
              dispatch (actions.toggleCulturalLanguageArabicValue (!currValue));
            }}
            checkedColor={Colors.ocean.primary}
          />
          <CheckBox
            checked={filterManager.cultural.language.hindi}
            title="Hindi"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.cultural.language.hindi;
              dispatch (actions.toggleCulturalLanguageHindiValue (!currValue));
            }}
            checkedColor={Colors.ocean.primary}
          />
          <CheckBox
            checked={filterManager.cultural.language.portuguese}
            title="Portuguese"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.cultural.language.portuguese;
              dispatch (
                actions.toggleCulturalLanguagePortugueseValue (!currValue)
              );
            }}
            checkedColor={Colors.ocean.primary}
          />
          <CheckBox
            checked={filterManager.cultural.language.banglaBengali}
            title="Bangla/Bengali"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.cultural.language.banglaBengali;
              dispatch (
                actions.toggleCulturalLanguageBanglaBengaliValue (!currValue)
              );
            }}
            checkedColor={Colors.ocean.primary}
          />
          <CheckBox
            checked={filterManager.cultural.language.russian}
            title="Russian"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.cultural.language.russian;
              dispatch (
                actions.toggleCulturalLanguageRussianValue (!currValue)
              );
            }}
            checkedColor={Colors.ocean.primary}
          />
          <CheckBox
            checked={filterManager.cultural.language.japanese}
            title="Japanese"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.cultural.language.japanese;
              dispatch (
                actions.toggleCulturalLanguageJapaneseValue (!currValue)
              );
            }}
            checkedColor={Colors.ocean.primary}
          />
          <CheckBox
            checked={filterManager.cultural.language.punjabi}
            title="Punjabi"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.cultural.language.punjabi;
              dispatch (
                actions.toggleCulturalLanguagePunjabiValue (!currValue)
              );
            }}
            checkedColor={Colors.ocean.primary}
          />
          </View> : null 
        }
        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10}}>
          <MTBoldText style={{color: Colors.ocean.primary, fontSize: 18}}>
            Religious Preference
          </MTBoldText>
          { showReligionFolder ? 
            <AntDesign name="caretup" size={24} color={Colors.rugged.primary} style={{marginLeft: 10}} onPress={() => setShowReligionFolder(false)} /> 
            : <AntDesign name="caretdown" size={24} color={Colors.rugged.primary} style={{marginLeft: 10}} onPress={() => setShowReligionFolder(true)}/> 
          }
        </View>
        { showReligionFolder ?
        <View>
          <CheckBox
            checked={filterManager.cultural.religion.noPreference}
            title="No Preference"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.cultural.religion.noPreference;
              dispatch (actions.toggleCulturalReligionNoPrefValue (!currValue));
            }}
            checkedColor={Colors.ocean.primary}
          />
          <CheckBox
            checked={filterManager.cultural.religion.christianity}
            title="Christianity"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.cultural.religion.christianity;
              dispatch (
                actions.toggleCulturalReligionChristianityValue (!currValue)
              );
            }}
            checkedColor={Colors.ocean.primary}
          />
          <CheckBox
            checked={filterManager.cultural.religion.judaism}
            title="Judaism"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.cultural.religion.judaism;
              dispatch (
                actions.toggleCulturalReligionJudaismValue (!currValue)
              );
            }}
            checkedColor={Colors.ocean.primary}
          />
          <CheckBox
            checked={filterManager.cultural.religion.islam}
            title="Islam"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.cultural.religion.islam;
              dispatch (actions.toggleCulturalReligionIslamValue (!currValue));
            }}
            checkedColor={Colors.ocean.primary}
          />
          <CheckBox
            checked={filterManager.cultural.religion.other}
            title="Other"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.cultural.religion.other;
              dispatch (actions.toggleCulturalReligionOtherValue (!currValue));
            }}
            checkedColor={Colors.ocean.primary}
          />
          </View> : null
        }
         <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',  marginTop: 10}}>
            <MTBoldText style={{color: Colors.ocean.primary, fontSize: 18}}>
              Racial Identity
            </MTBoldText>
            { showRacialIdentityFolder ? 
            <AntDesign name="caretup" size={24} color={Colors.rugged.primary} style={{marginLeft: 10}} onPress={() => setShowRacialIdentityFolder(false)} /> 
            : <AntDesign name="caretdown" size={24} color={Colors.rugged.primary} style={{marginLeft: 10}} onPress={() => setShowRacialIdentityFolder(true)}/> 
            }
          </View>
        { showRacialIdentityFolder ? 
        <View>
          <CheckBox
            checked={filterManager.cultural.race.hispanic}
            title="Hispanic"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.cultural.race.hispanic;
              dispatch (actions.toggleCulturalRaceHispanicValue (!currValue));
            }}
            checkedColor={Colors.ocean.primary}
          />
          <CheckBox
            checked={filterManager.cultural.race.white}
            title="White"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.cultural.race.white;
              dispatch (actions.toggleCulturalRaceWhiteValue (!currValue));
            }}
            checkedColor={Colors.ocean.primary}
          />
          <CheckBox
            checked={filterManager.cultural.race.black}
            title="Black"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.cultural.race.black;
              dispatch (actions.toggleCulturalRaceBlackValue (!currValue));
            }}
            checkedColor={Colors.ocean.primary}
          />
          <CheckBox
            checked={filterManager.cultural.race.asian}
            title="Asian"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.cultural.race.asian;
              dispatch (actions.toggleCulturalRaceAsianValue (!currValue));
            }}
            checkedColor={Colors.ocean.primary}
          />
          <CheckBox
            checked={filterManager.cultural.race.nativeAmerican}
            title="Native American"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.cultural.race.nativeAmerican;
              dispatch (
                actions.toggleCulturalRaceNativeAmericanValue (!currValue)
              );
            }}
            checkedColor={Colors.ocean.primary}
          />
          <CheckBox
            checked={filterManager.cultural.race.pacificIslander}
            title="Pacific Islander"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.cultural.race.pacificIslander;
              dispatch (
                actions.toggleCulturalRacePacificIslanderValue (!currValue)
              );
            }}
            checkedColor={Colors.ocean.primary}
          />
          <CheckBox
            checked={filterManager.cultural.race.asianSubcontinent}
            title="Asian Subcontinent"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.cultural.race.asianSubcontinent;
              dispatch (actions.toggleCulturalRaceAsianSubValue (!currValue));
            }}
            checkedColor={Colors.ocean.primary}
          />
          </View> : null 
        }
        <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10}}>
          <MTBoldText style={{color: Colors.ocean.primary, fontSize: 18}}>
            LGBTQ Supportive
          </MTBoldText>
          { showLGBTQFolder ? 
            <AntDesign name="caretup" size={24} color={Colors.rugged.primary} style={{marginLeft: 10}} onPress={() => setShowLGBTQFolder(false)} /> 
            : <AntDesign name="caretdown" size={24} color={Colors.rugged.primary} style={{marginLeft: 10}} onPress={() => setShowLGBTQFolder(true)}/> 
            }
        </View>
        { showLGBTQFolder ?
          <CheckBox
            checked={filterManager.cultural.lgbtq.supportive}
            title="LGBTQ Supportive"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.cultural.lgbtq.supportive;
              dispatch (
                actions.toggleCulturalLGBTQSupportiveValue (!currValue)
              );
            }}
            checkedColor={Colors.ocean.primary}
          /> : null 
        }
        <View style={{justifyContent:'center', alignItems:'center', height: 40, width: Dimensions.get('window').width, marginTop: 10 }}>
          <TouchableOpacity onPress={() => {
            Alert.alert("Stop", "You are about to reset all of your filters. Are you sure you would like to do this?", [{style: 'default', text: 'No'}, {text: 'Yes', onPress: () => {
              dispatch(actions.resetFilters())
            }}])
          }} style={{justifyContent: 'center', alignItems: 'flex-end'}}>
            <MTBoldText style={{color: 'red'}}>
              Reset All Filters
            </MTBoldText>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    );
  };

  const serviceFilterBar = () => {
    return (
      <View
        style={{
          height: 200,
          width: Dimensions.get ('window').width,
          backgroundColor: 'white',
        }}
      >

        {/* OUTSIDE SCROLL VIEW */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}
        >
          <MTBoldText style={{color: Colors.ocean.primary}}>
            Service Filters
          </MTBoldText>
          <TouchableWithoutFeedback
            onPress={() => setShowServiceFilter (false)}
            style={{justifyContent: 'flex-end'}}
          >
            <View>
              <MTLightText
                style={{textAlign: 'right', color: Colors.ocean.primary}}
              >
                Save
              </MTLightText>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <ScrollView style={{marginHorizontal: 10}}>
          {/* Personal Trainer Section */}
          <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10}}>
            <MTBoldText style={{color: Colors.ocean.primary, fontSize: 18}}>
              Personal Trainer Filters
            </MTBoldText>
            { showPersonalTrainerQs ? 
            <AntDesign name="caretup" size={24} color={Colors.rugged.primary} style={{marginLeft: 10}} onPress={() => setShowPersonalTrainerQs(false)} /> 
            : <AntDesign name="caretdown" size={24} color={Colors.rugged.primary} style={{marginLeft: 10}} onPress={() => setShowPersonalTrainerQs(true)}/> 
            }
          </View>
        { showPersonalTrainerQs ? 
        <View>
          <MTLightText style={{color: Colors.ocean.primary, marginTop: 5}}>
            Tell us why you want a personal trainer (you can select more than one option)
          </MTLightText>
          <CheckBox
            checked={servicePersonalTrainerA1}
            title="Keep up with my changing life"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={handleServicePersonalTrainerA1Click}
            checkedColor={Colors.ocean.primary}
          />

          <CheckBox
            checked={servicePersonalTrainerA2}
            title="Show off...at an event, to an ex, etc"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={handleServicePersonalTrainerA2Click}
            checkedColor={Colors.ocean.primary}
          />

          <CheckBox
            checked={servicePersonalTrainerA3}
            title="Doctor recommended it"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={handleServicePersonalTrainerA3Click}
            checkedColor={Colors.ocean.primary}
          />

          <CheckBox
            checked={servicePersonalTrainerA4}
            title="Need help with an injury"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={handleServicePersonalTrainerA4Click}
            checkedColor={Colors.ocean.primary}
          />

          <CheckBox
            checked={servicePersonalTrainerA5}
            title="Diet and Nutrition"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={handleServicePersonalTrainerA5Click}
            checkedColor={Colors.ocean.primary}
          />

          {/* <CheckBox
                            checked={servicePersonalTrainerA6} 
                            title="I'd like to be a little bigger, faster, and stronger."
                            textStyle={{fontFamily: 'tommy-reg'}} 
                            onPress={handleServicePersonalTrainerA6Click} 
                            checkedColor={Colors.ocean.primary} /> */}

          <CheckBox
            checked={
              filterManager.service.personalTrainer.traumaInformedPractitioner
            }
            title="Trauma Informed Practitioner"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue =
                filterManager.service.personalTrainer
                  .traumaInformedPractitioner;
              dispatch (
                actions.toggleServicePersonalTrainerTraumaIPValue (!currValue)
              );
            }}
            checkedColor={Colors.ocean.primary}
          />
        </View> : null 
          }
          {/* Meeting Experience Section */}
          <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10}}>
            <MTBoldText style={{color: Colors.ocean.primary, fontSize: 18}}>
              Meeting Experience
            </MTBoldText>
            { showMeetingExperienceFolder ? 
            <AntDesign name="caretup" size={24} color={Colors.rugged.primary} style={{marginLeft: 10}} onPress={() => setShowMeetingExperienceFolder(false)} /> 
            : <AntDesign name="caretdown" size={24} color={Colors.rugged.primary} style={{marginLeft: 10}} onPress={() => setShowMeetingExperienceFolder(true)}/> 
            }
          </View>
          { showMeetingExperienceFolder ?
          <View>
          <CheckBox
            checked={filterManager.service.meetingExperience.virtual}
            title="Virtual"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.service.meetingExperience.virtual;
              dispatch (
                actions.toggleServiceMeetingExpVirtualValue (!currValue)
              );
            }}
            checkedColor={Colors.ocean.primary}
          />

          <CheckBox
            checked={filterManager.service.meetingExperience.inPerson}
            title="In Person"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue =
                filterManager.service.meetingExperience.inPerson;
              dispatch (
                actions.toggleServiceMeetingExpInPersonValue (!currValue)
              );
            }}
            checkedColor={Colors.ocean.primary}
          />

          <CheckBox
            checked={filterManager.service.meetingExperience.noPref}
            title="Either is fine"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.service.meetingExperience.noPref;
              dispatch (
                actions.toggleServiceMeetingExpEitherValue (!currValue)
              );
            }}
            checkedColor={Colors.ocean.primary}
          />
          </View> : null 
        }
          {/* Distance Settings */}
          <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10}} >
          <MTBoldText style={{color: Colors.ocean.primary, fontSize: 18}}>
            Distance Settings Coming Soon!
          </MTBoldText>
          { showDistanceFolder ? 
            <AntDesign name="caretup" size={24} color={Colors.rugged.primary} style={{marginLeft: 10}} onPress={() => setShowDistanceFolder(false)} /> 
            : <AntDesign name="caretdown" size={24} color={Colors.rugged.primary} style={{marginLeft: 10}} onPress={() => setShowDistanceFolder(true)}/> 
            }
          </View>
          { showDistanceFolder ?
          <View>
          <CheckBox
            checked={filterManager.service.distance.within5Miles}
            title="Within 5 Miles"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.service.distance.within5Miles;
              dispatch (actions.toggleServiceDistanceWithin5Miles (!currValue));
            }}
            checkedColor={Colors.ocean.primary}
          />

          <CheckBox
            checked={filterManager.service.distance.within10Miles}
            title="Within 10 Miles"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.service.distance.within10Miles;
              dispatch (
                actions.toggleServiceDistanceWithin10Miles (!currValue)
              );
            }}
            checkedColor={Colors.ocean.primary}
          />

          <CheckBox
            checked={filterManager.service.distance.within20Miles}
            title="Within 20 Miles"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.service.distance.within20Miles;
              dispatch (
                actions.toggleServiceDistanceWithin20Miles (!currValue)
              );
            }}
            checkedColor={Colors.ocean.primary}
          />

          <CheckBox
            checked={filterManager.service.distance.within50Miles}
            title="Within 50 Miles"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.service.distance.within50Miles;
              dispatch (
                actions.toggleServiceDistanceWithin50Miles (!currValue)
              );
            }}
            checkedColor={Colors.ocean.primary}
          />
          </View> : null 
          }
          {/*  Price Settings */}
          <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10}}>
            <MTBoldText style={{color: Colors.ocean.primary, fontSize: 18}}>
              Price Settings
            </MTBoldText>
            { showPriceFolder ? 
            <AntDesign name="caretup" size={24} color={Colors.rugged.primary} style={{marginLeft: 10}} onPress={() => setShowPriceFolder(false)} /> 
            : <AntDesign name="caretdown" size={24} color={Colors.rugged.primary} style={{marginLeft: 10}} onPress={() => setShowPriceFolder(true)}/> 
            }
          </View>
          { showPriceFolder ?
          <View>
            
            <MTLightText style={{color: Colors.ocean.primary}}>
              Are you looking to pay per session, or in block rates?
            </MTLightText>

            <CheckBox
              checked={filterManager.service.pricingRange.showHourly}
              title="Hourly"
              textStyle={{fontFamily: 'tommy-reg'}}
              onPress={() => {
                const currValue = filterManager.service.pricingRange.showHourly;
                dispatch (
                  actions.toggleServicePricingRangeShowHourly (!currValue)
                );
              }}
              checkedColor={Colors.ocean.primary}
            />

          {filterManager.service.pricingRange.showHourly
            ? <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MTBoldText
                    style={{color: Colors.ocean.primary, fontSize: 14}}
                  >
                    Min
                  </MTBoldText>
                  <Input
                    placeholder={filterManager.service.pricingRange.hourly.floor.toString ()}
                    style={{width: '10%', marginLeft: 5}}
                    keyboardType="numeric"
                    value={filterManager.service.pricingRange.hourly.floor}
                    onChangeText={textInput =>
                      dispatch (
                        actions.setServicePricingRangeNewHourlyFloorValue (
                          textInput
                        )
                      )}
                  />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MTBoldText
                    style={{color: Colors.ocean.primary, fontSize: 14}}
                  >
                    Max
                  </MTBoldText>
                  <Input
                    placeholder={filterManager.service.pricingRange.hourly.ceil.toString ()}
                    style={{width: '10%', marginLeft: 5}}
                    keyboardType="numeric"
                    value={filterManager.service.pricingRange.hourly.ceil}
                    onChangeText={textInput =>
                      dispatch (
                        actions.setServicePricingRangeNewHourlyCeilValue (
                          textInput
                        )
                      )}
                  />
                </View>
              </View>
            : null}

          <CheckBox
            checked={filterManager.service.pricingRange.packageDeals}
            title="Package Deals"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.service.pricingRange.packageDeals;
              dispatch (
                actions.toggleServicePricingRangePackageDeal (!currValue)
              );
            }}
            checkedColor={Colors.ocean.primary}
          />

          <CheckBox
            checked={filterManager.service.pricingRange.instantQuote}
            title="Instant Quote Available"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue = filterManager.service.pricingRange.instantQuote;
              dispatch (
                actions.toggleServicePricingRangeInstantQuoteAvailable (
                  !currValue
                )
              );
            }}
            checkedColor={Colors.ocean.primary}
          />
          </View> : null 
          }
          {/* <CheckBox 
                            checked={filterManager.service.pricingRange.sodalytDiscount} 
                            title="Soadlyt Discount Available"
                            textStyle={{fontFamily: 'tommy-reg'}} 
                            onPress={() => {
                                const currValue = filterManager.service.pricingRange.sodalytDiscount
                                dispatch(actions.toggleServicePricingRangeSodalytDiscountAvailable(!currValue))
                            }} 
                            checkedColor={Colors.ocean.primary} /> */}

          {/* Corporate Sustainability Response */}
          <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10}}>
            <MTBoldText style={{color: Colors.ocean.primary, fontSize: 18}}>
              Ethics
            </MTBoldText>
            { showEthicsFolder ? 
            <AntDesign name="caretup" size={24} color={Colors.rugged.primary} style={{marginLeft: 10}} onPress={() => setShowEthicsFolder(false)} /> 
            : <AntDesign name="caretdown" size={24} color={Colors.rugged.primary} style={{marginLeft: 10}} onPress={() => setShowEthicsFolder(true)}/> 
            }
          </View>
        { showEthicsFolder ?
          <CheckBox
            checked={filterManager.service.corporateSustainabilityPolicy}
            title="Corporate Sustainability Policy"
            textStyle={{fontFamily: 'tommy-reg'}}
            onPress={() => {
              const currValue =
                filterManager.service.corporateSustainabilityPolicy;
              dispatch (
                actions.toggleServiceCorporateSustainabilityPolicy (!currValue)
              );
            }}
            checkedColor={Colors.ocean.primary}
          /> : null
        }
         <View style={{justifyContent:'center', alignItems:'center', height: 40, width: Dimensions.get('window').width, marginTop: 10 }}>
          <TouchableOpacity onPress={() => {
            Alert.alert("Stop", "You are about to reset all of your filters. Are you sure you would like to do this?", [{style: 'default', text: 'No'}, {text: 'Yes', onPress: () => {
              dispatch(actions.resetFilters())
            }}])
          }} style={{justifyContent: 'center', alignItems: 'flex-end'}}>
            <MTBoldText style={{color: 'red'}}>
              Reset All Filters
            </MTBoldText>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    );
  };

  if (reduxProfArray.length > 0) {
    generateMBTIPercentage (personalityType);
    assignSodalytTypes (reduxProfArray);
    handleFilterSwitch ();
  }

  return (
    <TouchableWithoutFeedback
      style={{flex: 1}}
      onPress={() => Keyboard.dismiss ()}
    >
      <View style={styles.screen}>
        {/* Above the list content */}
        <View>
          <View style={styles.searchBarCont}>
            <View style={styles.inputHolder}>
              <Input
                style={styles.input}
                placeholder="Try searching for another professional service"
                value={newSearchValue}
                onChangeText={handleNewSearchInput}
              />
            </View>
            <View style={styles.iconHolder}>
              <Ionicons
                name="md-search"
                color="white"
                size={32}
                onPress={() => {
                  dispatch (actions.setSearchedTerm (newSearchValue));
                }}
              />
            </View>
          </View>
          <View style={styles.filterContainer}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{marginLeft: 8, justifyContent: 'center', marginTop: 3}}
              >
                <MTMediumText
                  style={{fontSize: 14, color: Colors.ocean.primary}}
                >
                  Sodalyt{' '}
                </MTMediumText>
                <MTMediumText
                  style={{fontSize: 14, color: Colors.ocean.primary}}
                >
                  Verified
                </MTMediumText>
                <Switch
                  value={sodalytVerified}
                  onValueChange={newState => setSodalytVerified (newState)}
                  trackColor={{true: Colors.ocean.primary}}
                />
              </View>
              <ScrollView
                contentContainerStyle={styles.scrollFilters}
                style={{marginLeft: 10, flexDirection: 'row', height: 50}}
              >
                <TouchableOpacity onPress={handleCulturalFilterClick}>
                  <View
                    style={{
                      borderBottomWidth: 3,
                      borderBottomColor: Colors.vertical.one,
                      borderBottomRightRadius: 3,
                      borderBottomLeftRadius: 3,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <MTMediumText
                      style={{color: Colors.ocean.secondary, fontSize: 20}}
                    >
                      Culture
                    </MTMediumText>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginLeft: 20}}
                  onPress={handleServiceFilterClick}
                >
                  <View
                    style={{
                      borderBottomWidth: 3,
                      borderBottomColor: Colors.vertical.one,
                      borderBottomRightRadius: 3,
                      borderBottomLeftRadius: 3,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <MTMediumText
                      style={{color: Colors.ocean.secondary, fontSize: 20}}
                    >
                      Service
                    </MTMediumText>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginLeft: 20}}
                  onPress={handlePsychologyFilterClick}
                >
                  <View
                    style={{
                      borderBottomWidth: 3,
                      borderBottomColor: Colors.vertical.one,
                      borderBottomRightRadius: 3,
                      borderBottomLeftRadius: 3,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <MTMediumText
                      style={{color: Colors.ocean.secondary, fontSize: 20}}
                    >
                      Personality
                    </MTMediumText>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
            <MTMediumText style={styles.searchInfoText}>
              Showing
              {' '}
              {filteredProfessionals.length}
              {' '}
              matches for the term '
              {' '}
              {searchedTerm}
              {' '}
              '
            </MTMediumText>
          </View>
          {showCulturalFilter ? culturalFilterBar () : null}
          {showServiceFilter ? serviceFilterBar () : null}
          {showPsychologyFilter
            ? <View
                style={{
                  height: 200,
                  width: Dimensions.get ('window').width,
                  backgroundColor: 'white',
                  padding: 10,
                }}
              >
                <MTMediumText
                  style={{color: Colors.ocean.primary, fontSize: 12}}
                >
                  Here at Soadlyt, we've spent a great deal of time perfecting our recipe for pairing customers with professional experts, and cultivating great relationships. However, we understand that sometimes, you may not want to factor personality into your professional expert choice. For those cases, turn the psychology switch off.
                </MTMediumText>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 20,
                  }}
                >
                  <MTBoldText style={{color: Colors.ocean.secondary}}>
                    Psychology Matching
                  </MTBoldText>
                  <Switch
                    style={{marginLeft: 5}}
                    value={sodalytTypingActive}
                    onValueChange={newValue =>
                      setSodalytTypingActive (newValue)}
                    trackColor={{true: Colors.ocean.primary}}
                  />
                </View>
                <TouchableWithoutFeedback
                  onPress={() => setShowPsychologyFilter (false)}
                >
                  <View
                    style={
                      Platform.OS === 'ios' ? {marginTop: 26} : {marginTop: 15}
                    }
                  >
                    <MTLightText
                      style={{
                        color: Colors.ocean.secondary,
                        textAlign: 'right',
                        fontSize: 12,
                      }}
                    >
                      Hide
                    </MTLightText>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            : null}
        </View>
        {/* list  content */}
        {initialLoad
          ? filteredProfessionals.length > 0
              ? <FlatList
                  data={
                    sodalytTypingActive
                      ? filteredProfessionals
                          .sort ((a, b) => {
                            return (
                              a.dynamicMeyersBriggsPercentage -
                              b.dynamicMeyersBriggsPercentage
                            );
                          })
                          .reverse ()
                      : filteredProfessionals
                  }
                  keyExtractor={p => p.id}
                  renderItem={renderItem}
                  style={styles.flatList}
                />
              : <View
                  style={{
                    flex: 1,
                    backgroundColor: Colors.ocean.primary,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <MTBoldText
                    style={{textAlign: 'center', marginHorizontal: 6}}
                  >
                    Woops! It looks like your search didn't yield any results. This means that there aren't enough enlisted experts for that service yet, where we can confidently give you a match.
                    {' '}
                  </MTBoldText>
                  <MTBoldText />
                  <MTBoldText>
                    Don't worry though! Our platform is growing everyday, if you'd like to receive a notification when this search will be available, you can add this phrase to your wacthlist below.
                  </MTBoldText>
                  <View
                    style={{
                      width: Dimensions.get ('window').width * 0.8,
                      height: 60,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: Colors.rugged.primary,
                      marginTop: 20,
                      borderRadius: 15,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        height: '100%',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={() =>  Alert.alert(
                        "Success!", `You've added the term ${searchedTerm} to your watchlist.`, [{text: "Close", style: 'default'}]
                    )}
                    >
                      <MTBoldText>
                        Add the term '{searchedTerm}' to your watchlist
                      </MTBoldText>
                      <MaterialCommunityIcons
                        name="eye-plus"
                        size={24}
                        color="white"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
          : <View
              style={{
                width: '90%',
                height: '100%',
                backgroundColor: Colors.ocean.primary,
              }}
            >
              <FlatList
                contentContainerStyle={{width: '100%', height: '100%'}}
                data={[1, 2, 3, 4, 5, 6, 7, 8]}
                keyExtractor={item => item}
                numColumns={1}
                renderItem={() => (
                  <Placeholder
                    style={{marginVertical: 8}}
                    Left={PlaceholderMedia}
                    Animation={Loader}
                  >
                    <PlaceholderLine width={80} />
                    <PlaceholderLine />
                    <PlaceholderLine width={30} />
                  </Placeholder>
                )}
              />
            </View>}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create ({
  screen: {
    flex: 1,
    backgroundColor: Colors.ocean.primary,
    alignItems: 'center',
  },
  searchBarCont: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.ocean.secondary,
    width: Dimensions.get ('window').width,
    height: 50,
  },
  inputHolder: {
    width: '80%',
    height: '75%',
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
  },
  iconHolder: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: Colors.ocean.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 0,
    marginLeft: 5,
    fontFamily: 'tommy-reg',
  },
  filterContainer: {
    height: 90,
    width: Dimensions.get ('window').width,
    backgroundColor: 'white',
  },
  searchInfoText: {
    color: Colors.ocean.primary,
    textAlign: 'right',
    marginHorizontal: 5,
  },
  scrollFilters: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatList: {
    width: Dimensions.get ('window').width,
  },
  profRow: {
    width: '100%',
    height: 100,
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    height: 80,
    width: 80,
  },
  moreInfo: {
    marginHorizontal: 10,
    width: '75%',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default SearchResultScreen;
