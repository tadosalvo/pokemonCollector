import {CognitoUserPool} from 'amazon-cognito-identity-js'

const poolData = {
    UserPoolId: "us-east-2_i8Jpgsf1L",
    ClientId : "247e050q5lborh1ial9sovvudq"
}

export default new CognitoUserPool(poolData)