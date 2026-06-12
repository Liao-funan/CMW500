# Configuring Network Settings

Module: NBIoT Signaling
Source: 284e8184e0ac4dca.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring Network Settings
Configuring Network Settings
// *****************************************************************************
// Specify MCC, 2-digit MNC and tracking area code.
// Configure E-UTRAN cell ID.
// *****************************************************************************
CONFigure:NIOT:SIGN:CELL:MCC 262
CONFigure:NIOT:SIGN:CELL:MNC:DIGits TWO
CONFigure:NIOT:SIGN:CELL:MNC 30
CONFigure:NIOT:SIGN:CELL:TAC 1384
CONFigure:NIOT:SIGN:CELL:CID:EUTRan #B10000010001000
// *****************************************************************************
// Enable authentication and integrity protection.
// Define integrity algorithm, secret key and OPc. Enable milenage.
// *****************************************************************************
CONFigure:NIOT:SIGN:CELL:SECurity:AUTHenticat ON
CONFigure:NIOT:SIGN:CELL:SECurity:SECurity ON
CONFigure:NIOT:SIGN:CELL:SECurity:IALGorithm S3G
CONFigure:NIOT:SIGN:CELL:SECurity:SKEY #H000102030405060708090A0B0C0D0E0F
CONFigure:NIOT:SIGN:CELL:SECurity:OPC #H000010B00091006000F00000A0005000
CONFigure:NIOT:SIGN:CELL:SECurity:MILenage ON
// *****************************************************************************
// Configure timers.
// *****************************************************************************
CONFigure:NIOT:SIGN:CELL:TOUT:OOSYnc 10
CONFigure:NIOT:SIGN:CELL:TOUT:T3324 10
CONFigure:NIOT:SIGN:CELL:TOUT:T3412 180
CONFigure:NIOT:SIGN:CELL:TOUT:TEXT 18600
// *****************************************************************************
// Synchronize the signaling application to zone 1.
// *****************************************************************************
CONFigure:NIOT:SIGN:CELL:SYNC:ZONE Z1
CONFigure:NIOT:SIGN:CELL:SYNC:OFFSet 0
Top