/**
 * Apache Fineract REST API
 * Apache Fineract is a secure, multi-tenanted microfinance platform. The goal of the Apache Fineract API is to empower developers to build apps on top of the Apache Fineract Platform. The https://cui.fineract.dev[reference app] (username: mifos, password: password) works on the same demo tenant as the interactive links in this documentation. Until we complete the new REST API documentation you still have the legacy documentation available https://fineract.apache.org/legacy-docs/apiLive.htm[here]. Please check https://fineract.apache.org/docs/current[the Fineract documentation] for more information.
 *
 * The version of the OpenAPI document: 1.11.0-SNAPSHOT
 * Contact: dev@fineract.apache.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CurrencyData } from './currencyData';
import { ChargeData } from './chargeData';
import { EnumOptionData } from './enumOptionData';
import { ChargeFeeOnMonthDay } from './chargeFeeOnMonthDay';


export interface SavingsAccountChargeData { 
    accountId?: number;
    amount?: number;
    amountOrPercentage?: number;
    amountOutstanding?: number;
    amountPaid?: number;
    amountPercentageAppliedTo?: number;
    amountWaived?: number;
    amountWrittenOff?: number;
    annualFee?: boolean;
    chargeCalculationType?: EnumOptionData;
    chargeData?: ChargeData;
    chargeId?: number;
    chargeOptions?: Array<ChargeData>;
    chargeTimeType?: EnumOptionData;
    currency?: CurrencyData;
    dueDate?: string;
    feeCharge?: boolean;
    feeInterval?: number;
    feeOnMonthDay?: ChargeFeeOnMonthDay;
    freeWithdrawalChargeFrequency?: number;
    id?: number;
    inactivationDate?: string;
    isActive?: boolean;
    isFreeWithdrawal?: boolean;
    name?: string;
    penalty?: boolean;
    percentage?: number;
    restartFrequency?: number;
    restartFrequencyEnum?: number;
    savingsActivation?: boolean;
    withdrawalFee?: boolean;
}

