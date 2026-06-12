# Configuring the BER Measurement

Module: WCDMA Signaling
Source: 398a480c39df45fb.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
BER Tests
 > 
Configuring the BER Measurement
Configuring the BER Measurement
// *****************************************************************************
// System-Reset
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Configure RMC with symmetric data rate, loop mode 2, disabled CRC, and
// 100% of transport blocks filled.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CONNection:UETerminate TEST
CONFigure:WCDMa:SIGN:CONNection:TMODe:TYPE RMC
CONFigure:WCDMa:SIGN:CONNection:TMODe:RMC:DRATe R12K2, R12K2
CONFigure:WCDMa:SIGN:CONNection:TMODe:RMC:TMODe MODE2
CONFigure:WCDMa:SIGN:CONNection:TMODe:RMC:UCRC OFF
CONFigure:WCDMa:SIGN:CONNection:TMODe:RMC:DLRessources P1000
// *****************************************************************************
// Configure BER measurement settings: stop on limit failure, number of
// transport blocks to be measured, transport block reordering, and limits
// *****************************************************************************
CONFigure:WCDMa:SIGN:BER:SCONdition SLFail
CONFigure:WCDMa:SIGN:BER:TBLocks 200
CONFigure:WCDMa:SIGN:BER:PNResync ON
CONFigure:WCDMa:SIGN:BER:LIMit 0.2,2,2,5,OFF,OFF,2
Top