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
import { ExternalId } from './externalId';


export interface InteropTransactionData { 
    accountBalance: number;
    accountId: string;
    amount: number;
    bookingDateTime: string;
    changes?: { [key: string]: object; };
    chargeAmount?: number;
    clientId?: number;
    commandId?: number;
    creditBureauReportData?: { [key: string]: object; };
    currency: string;
    glimId?: number;
    groupId?: number;
    gsimId?: number;
    loanId?: number;
    note?: string;
    officeId?: number;
    productId?: number;
    resourceExternalId?: ExternalId;
    resourceId?: number;
    resourceIdentifier?: string;
    rollbackTransaction?: boolean;
    savingTransactionId: string;
    savingsId?: number;
    subResourceExternalId?: ExternalId;
    subResourceId?: number;
    transactionId?: string;
    transactionType: InteropTransactionData.TransactionTypeEnum;
    valueDateTime: string;
}
export namespace InteropTransactionData {
    export type TransactionTypeEnum = 'INVALID' | 'DEPOSIT' | 'WITHDRAWAL' | 'INTEREST_POSTING' | 'WITHDRAWAL_FEE' | 'ANNUAL_FEE' | 'WAIVE_CHARGES' | 'PAY_CHARGE' | 'DIVIDEND_PAYOUT' | 'ACCRUAL' | 'INITIATE_TRANSFER' | 'APPROVE_TRANSFER' | 'WITHDRAW_TRANSFER' | 'REJECT_TRANSFER' | 'WRITTEN_OFF' | 'OVERDRAFT_INTEREST' | 'WITHHOLD_TAX' | 'ESCHEAT' | 'AMOUNT_HOLD' | 'AMOUNT_RELEASE';
    export const TransactionTypeEnum = {
        Invalid: 'INVALID' as TransactionTypeEnum,
        Deposit: 'DEPOSIT' as TransactionTypeEnum,
        Withdrawal: 'WITHDRAWAL' as TransactionTypeEnum,
        InterestPosting: 'INTEREST_POSTING' as TransactionTypeEnum,
        WithdrawalFee: 'WITHDRAWAL_FEE' as TransactionTypeEnum,
        AnnualFee: 'ANNUAL_FEE' as TransactionTypeEnum,
        WaiveCharges: 'WAIVE_CHARGES' as TransactionTypeEnum,
        PayCharge: 'PAY_CHARGE' as TransactionTypeEnum,
        DividendPayout: 'DIVIDEND_PAYOUT' as TransactionTypeEnum,
        Accrual: 'ACCRUAL' as TransactionTypeEnum,
        InitiateTransfer: 'INITIATE_TRANSFER' as TransactionTypeEnum,
        ApproveTransfer: 'APPROVE_TRANSFER' as TransactionTypeEnum,
        WithdrawTransfer: 'WITHDRAW_TRANSFER' as TransactionTypeEnum,
        RejectTransfer: 'REJECT_TRANSFER' as TransactionTypeEnum,
        WrittenOff: 'WRITTEN_OFF' as TransactionTypeEnum,
        OverdraftInterest: 'OVERDRAFT_INTEREST' as TransactionTypeEnum,
        WithholdTax: 'WITHHOLD_TAX' as TransactionTypeEnum,
        Escheat: 'ESCHEAT' as TransactionTypeEnum,
        AmountHold: 'AMOUNT_HOLD' as TransactionTypeEnum,
        AmountRelease: 'AMOUNT_RELEASE' as TransactionTypeEnum
    };
}


