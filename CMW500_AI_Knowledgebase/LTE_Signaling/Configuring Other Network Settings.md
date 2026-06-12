# Configuring Other Network Settings

Module: LTE Signaling
Source: d5dd2f63ec0542c4.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring Other Network Settings
Configuring Other Network Settings
// *****************************************************************************
// Specify MCC, 2-digit MNC and tracking area code.
// Configure E-UTRAN cell ID for PCC and SCC1.
// *****************************************************************************
CONFigure:LTE:SIGN:CELL:MCC 262
CONFigure:LTE:SIGN:CELL:MNC:DIGits TWO
CONFigure:LTE:SIGN:CELL:MNC 30
CONFigure:LTE:SIGN:CELL:TAC 1384
CONFigure:LTE:SIGN:CELL:PCC:CID:EUTRan #B10000010001000
CONFigure:LTE:SIGN:CELL:SCC:CID:EUTRan #B10000010001001
// *****************************************************************************
// Enable authentication, NAS security, AS security and milenage.
// Define integrity algorithm, OPc, secret key and RAND mode.
// *****************************************************************************
CONFigure:LTE:SIGN:CELL:SECurity:AUTHenticat ON
CONFigure:LTE:SIGN:CELL:SECurity:NAS ON
CONFigure:LTE:SIGN:CELL:SECurity:AS ON
CONFigure:LTE:SIGN:CELL:SECurity:MILenage ON
CONFigure:LTE:SIGN:CELL:SECurity:IALGorithm S3G
CONFigure:LTE:SIGN:CELL:SECurity:OPC #H000010B00091006000F00000A0005000
CONFigure:LTE:SIGN:CELL:SECurity:SKEY #H000102030405060708090A0B0C0D0E0F
CONFigure:LTE:SIGN:CELL:SECurity:RVALue EVEN
// *****************************************************************************
// Configure timers.
// *****************************************************************************
CONFigure:LTE:SIGN:CELL:TOUT:OSYNch 40
CONFigure:LTE:SIGN:CELL:TOUT:T3412 180
CONFigure:LTE:SIGN:CELL:TOUT:TEXT3412 18600
// *****************************************************************************
// Configure NAS signaling settings:
// Disable sending of a DNS IP address to the UE, configure reject causes,
// enable IE "EPS Network Feature Support" and configure its contents.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:SDNSpco OFF
CONFigure:LTE:SIGN:CELL:RCAuse:ATTach CONG22
CONFigure:LTE:SIGN:CELL:ACAuse:ATTach ON
CONFigure:LTE:SIGN:CELL:RCAuse:TAU TANA12
CONFigure:LTE:SIGN:CELL:NAS:EPSNetwork ON
CONFigure:LTE:SIGN:CELL:NAS:IMSVops NSUP
CONFigure:LTE:SIGN:CELL:NAS:EMCBs SUPP
CONFigure:LTE:SIGN:CELL:NAS:EPCLcs NSUP
CONFigure:LTE:SIGN:CELL:NAS:CSLCs NINF
// *****************************************************************************
// Synchronize the signaling application and the PCC to zone 1.
// Apply an offset of 30 µs to the SCC1.
// *****************************************************************************
CONFigure:LTE:SIGN:CELL:SYNC:ZONE Z1
CONFigure:LTE:SIGN:CELL:PCC:SYNC:OFFSet 0
CONFigure:LTE:SIGN:CELL:SCC:SYNC:OFFSet 30E-6
Top