# Performing an Intra-RAT Handover

Module: LTE Signaling
Source: daef249216bc45a7.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Performing an Intra-RAT Handover
Performing an Intra-RAT Handover
// *****************************************************************************
// An intra-RAT handover is a handover within the LTE signaling application.
//
// Select the LTE signaling application as handover destination.
// Define the destination parameters: band 2, DL channel no. 910,
// 10 MHz cell bandwidth, additional requirement NS_03.
// Initiate the handover.
// *****************************************************************************
PREPare:LTE:SIGN:HANDover:DESTination "LTE Sig1"
PREPare:LTE:SIGN:HANDover OB2, 910, B100, NS03
CALL:LTE:SIGN:PSWitched:ACTion HANDover
Top