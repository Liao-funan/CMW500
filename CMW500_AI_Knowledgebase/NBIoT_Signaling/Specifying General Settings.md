# Specifying General Settings

Module: NBIoT Signaling
Source: eeb8e182672c43a1.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Programming
 > 
General Configuration
 > 
Specifying General Settings
Specifying General Settings
// *****************************************************************************
// Define the time delay to be compensated in output and input paths.
// *****************************************************************************
CONFigure:NIOT:SIGN:RFSettings:EDC:OUTPut 5E-9
CONFigure:NIOT:SIGN:RFSettings:EDC:INPut 5E-9
// *****************************************************************************
// Select manual expected nominal power mode and specify the expected power,
// the user margin and the mixer level offset.
// *****************************************************************************
CONFigure:NIOT:SIGN:RFSettings:ENPMode MANual
CONFigure:NIOT:SIGN:RFSettings:ENPower -25
CONFigure:NIOT:SIGN:RFSettings:UMARgin 3
CONFigure:NIOT:SIGN:RFSettings:MLOFfset 1
Top