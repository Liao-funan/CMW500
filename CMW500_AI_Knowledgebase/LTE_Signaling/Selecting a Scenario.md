# Selecting a Scenario

Module: LTE Signaling
Source: 830f56ac845c4aab.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Selecting a Scenario
Selecting a Scenario
Each scenario is activated via a different 
ROUTe
 command. Some examples are given in this section.
Each of the following command blocks activates a scenario, selects the related signal paths and configures the related external attenuations. Execute only one command block.
// *****************************************************************************
// SISO, no CA, no fading
// *****************************************************************************
ROUTe:LTE:SIGN:SCENario:SCELl:FLEXible SUW1,RF2C,RX1,RF2C,TX1
CONFigure:LTE:SIGN:RFSettings:EATTenuation:OUTPut 2
CONFigure:LTE:SIGN:RFSettings:EATTenuation:INPut 2
// *****************************************************************************
// MIMO 4x2, no CA, internal fading
// *****************************************************************************
ROUT:LTE:SIGN:SCEN:MTFading:FLEXible:INT SUW1,SUW2,RF1C,RX1,RF1C,TX1,RF3C,TX2
CONFigure:LTE:SIGN:RFSettings:EATTenuation:OUTPut1 2
CONFigure:LTE:SIGN:RFSettings:EATTenuation:OUTPut2 2
CONFigure:LTE:SIGN:RFSettings:EATTenuation:INPut 2
// *****************************************************************************
// SISO, DL CA two carriers, external fading
// *****************************************************************************
ROUTe:LTE:SIGN:SCEN:CATF:FLEXible SUW1,RF1C,RX1,RF1C,TX1,IQ2O,SUW2,RF3C,TX2,IQ4O
CONFigure:LTE:SIGN:RFSettings:PCC:EATTenuation:OUTPut 2
CONFigure:LTE:SIGN:RFSettings:SCC:EATTenuation:OUTPut 2
CONFigure:LTE:SIGN:RFSettings:PCC:EATTenuation:INPut 2
// *****************************************************************************
// MIMO nx2, DL CA two carriers, internal fading
// *****************************************************************************
ROUTe:LTE:SIGN:SCENario:CAFF:FLEXible:INTernal
    SUW1,RF1C,RX1,RF1C,TX1,RF2C,TX3,SUW2,RF3C,TX2,RF4C,TX4
CONFigure:LTE:SIGN:RFSettings:PCC:EATTenuation:OUTPut1 2
CONFigure:LTE:SIGN:RFSettings:PCC:EATTenuation:OUTPut2 2
CONFigure:LTE:SIGN:RFSettings:SCC:EATTenuation:OUTPut1 2
CONFigure:LTE:SIGN:RFSettings:SCC:EATTenuation:OUTPut2 2
CONFigure:LTE:SIGN:RFSettings:PCC:EATTenuation:INPut 2
// *****************************************************************************
// DL CA three carriers, SCC1 MIMO nx2, PCC/SCC2 SISO, no fading
// *****************************************************************************
ROUTe:LTE:SIGN:SCENario:CCMS1:FLEXible
    SUW1,RF2C,RX3,RF2C,TX3,SUW2,RF1C,TX1,RF3C,TX2,SUW3,RF4C,TX4
CONFigure:LTE:SIGN:RFSettings:PCC:EATTenuation:OUTPut1 2
CONFigure:LTE:SIGN:RFSettings:SCC1:EATTenuation:OUTPut1 2
CONFigure:LTE:SIGN:RFSettings:SCC1:EATTenuation:OUTPut2 2
CONFigure:LTE:SIGN:RFSettings:SCC2:EATTenuation:OUTPut1 2
CONFigure:LTE:SIGN:RFSettings:PCC:EATTenuation:INPut 2
// *****************************************************************************
// MIMO nx2, DL CA four carriers, internal fading, UL CA
// *****************************************************************************
ROUTe:LTE:SIGN:SCENario:DHF:INTernal SUW11,R11C,RX11,R11C,TX11,R12C,TX13,
    SUW12,R13C,TX12,R14C,TX14,SUW21,R21C,TX21,R22C,TX23,SUW22,R23C,TX22,R24C,TX24
CONFigure:LTE:SIGN:RFSettings:PCC:EATTenuation:OUTPut1 2
CONFigure:LTE:SIGN:RFSettings:PCC:EATTenuation:OUTPut2 2
CONFigure:LTE:SIGN:RFSettings:SCC1:EATTenuation:OUTPut1 2
CONFigure:LTE:SIGN:RFSettings:SCC1:EATTenuation:OUTPut2 2
CONFigure:LTE:SIGN:RFSettings:SCC2:EATTenuation:OUTPut1 2
CONFigure:LTE:SIGN:RFSettings:SCC2:EATTenuation:OUTPut2 2
CONFigure:LTE:SIGN:RFSettings:SCC3:EATTenuation:OUTPut1 2
CONFigure:LTE:SIGN:RFSettings:SCC3:EATTenuation:OUTPut2 2
CONFigure:LTE:SIGN:RFSettings:PCC:EATTenuation:INPut 2
CONFigure:LTE:SIGN:RFSettings:SCC1:EATTenuation:INPut 2
Top