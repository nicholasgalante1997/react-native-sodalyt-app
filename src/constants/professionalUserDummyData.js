import ProfessionalUser from '../models/ProfessionalUser'
import VerticalCategoryInfo from './verticalCategoriesData'
const faker = require('faker')

const DATA  = [] 

const personalTrainerSpecialties = [
    "Athletic Performance (CSCS)",
    "Strength Program (NSCA-CPT)",
    "Injury Related(NASM)",
    "General Fitness (ACSM, ACE, Cross-Fit)",
    "Nutrition",
    "Restorative and Holistic"
]

const personalTrainerCertifications = [
    "NSCA", "NASM", "ACSM", "ACE", "Cross-Fit", "NASM CNC", "ISSA", "PN1", "NESTA", "AFPA"
]

const possibleMBTIs = [
    "ENFJ",
    "ENFP",
    "ENTJ",
    "ENTP",
    "ESFJ",
    "ESFP",
    "ESTJ",
    "ESTP",
    "INFJ",
    "INFP",
    "INTJ",
    "INTP",
    "ISFJ",
    "ISFP",
    "ISTJ",
    "ISTP"
]

const genderPrefArr = [
    "M", "F", "Prefer not to say"
]

const possibleLanguagesSpoken = [
    "Spanish", "Chinese-Mandarin", "French", "Arabic", "Hindi", "Portuguese", "Bangla/Bengali", "Russian", "Japanese", "Punjabi"
]

const boolean = [true, false]

const pricingModelValues = ["package", "hourly"]

const religiousPrefArr = [
    "no preference", "Christianity", "Islam", "Judaism", "Other"
]

const racialIdentity = [
    "Hispanic", "White", "Black", "Asian", "Native American", "Pacific Islander", "Asian-subcontinent"
]

for (let i=0; i <= 100; i++) {
    DATA.push(
        new ProfessionalUser(
            i,
            1,
            faker.company.companyName(),
            faker.internet.email(),
            faker.internet.domainName(),
            faker.address.streetAddress(),
            faker.address.zipCodeByState("texas"),
            faker.internet.avatar(),
            faker.lorem.paragraph(),
           [personalTrainerSpecialties[Math.floor(Math.random() * personalTrainerSpecialties.length)]],
           [personalTrainerCertifications[Math.floor(Math.random() * personalTrainerCertifications.length)]],
            faker.phone.phoneNumber(),
            [possibleMBTIs[Math.floor(Math.random() * possibleMBTIs.length)]],
            boolean[Math.floor(Math.random() * boolean.length)],
            boolean[Math.floor(Math.random() * boolean.length)],
            boolean[Math.floor(Math.random() * boolean.length)],
            pricingModelValues[Math.floor(Math.random() * pricingModelValues.length)],
            Math.floor(Math.random() * 6),
            genderPrefArr[Math.floor(Math.random() * genderPrefArr.length)],
            [possibleLanguagesSpoken[Math.floor(Math.random() * possibleLanguagesSpoken.length)], possibleLanguagesSpoken[Math.floor(Math.random() * possibleLanguagesSpoken.length)], possibleLanguagesSpoken[Math.floor(Math.random() * possibleLanguagesSpoken.length)]],
            boolean[Math.floor(Math.random() * boolean.length)],
            religiousPrefArr[Math.floor(Math.random() * religiousPrefArr.length)],
            racialIdentity[Math.floor(Math.random() * racialIdentity.length)],
            boolean[Math.floor(Math.random() * boolean.length)],
            boolean[Math.floor(Math.random() * boolean.length)]
        )
    )
}

export default DATA 