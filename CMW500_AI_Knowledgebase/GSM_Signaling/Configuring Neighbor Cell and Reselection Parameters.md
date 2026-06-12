# Configuring Neighbor Cell and Reselection Parameters

Module: GSM Signaling
Source: 6eb4517df590416e.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring Neighbor Cell and Reselection Parameters
Configuring Neighbor Cell and Reselection Parameters
// *****************************************************************************
// Specify 2 neighbor cell entries for LTE, GSM, WCDMA, TD-SCDMA.
// Enable the MS neighbor cell measurements for the first cell per RAT.
// *****************************************************************************
CONFigure:GSM:SIGN:NCELl:LTE:CELL1 ON, OB1, 10, 0, ON
CONFigure:GSM:SIGN:NCELl:LTE:CELL2 ON, OB2, 700, 1, OFF
CONFigure:GSM:SIGN:NCELl:GSM:CELL1 ON, G09, 0, ON, 21
CONFigure:GSM:SIGN:NCELl:GSM:CELL2 ON, G09, 124, OFF, 22
CONFigure:GSM:SIGN:NCELl:WCDMa:CELL1 ON, OB1, 10562, #H10A, ON
CONFigure:GSM:SIGN:NCELl:WCDMa:CELL2 ON, OB2, 412, #H10B, OFF
CONFigure:GSM:SIGN:NCELl:TDSCdma:CELL1 ON, OB1, 9400, #H7E, ON
CONFigure:GSM:SIGN:NCELl:TDSCdma:CELL2 ON, OB2, 10050, #H7F, OFF
// *****************************************************************************
// Specify neighbor cell reselection thresholds per technology.
// *****************************************************************************
CONFigure:GSM:SIGN:NCELl:LTE:THResholds:HIGH 5
CONFigure:GSM:SIGN:NCELl:WCDMa:THResholds:HIGH 5
CONFigure:GSM:SIGN:NCELl:TDSCdma:THResholds:HIGH 5
// *****************************************************************************
// Specify reselection criteria GSM, UMTS and LTE cells and
// threshold for reselection 10 s.
// *****************************************************************************
CONFigure:GSM:SIGN:CELL:RESelection:QUALity:RXLevmin:ACCess -100
CONFigure:GSM:SIGN:CELL:RESelection:HYSTeresis 10
CONFigure:GSM:SIGN:CELL:RESelection:QUALity:RXLevmin:UTRan -57
CONFigure:GSM:SIGN:CELL:RESelection:QUALity:RXLevmin:EUTRan -78
CONFigure:GSM:SIGN:CELL:RESelection:TRESelection 10
Top