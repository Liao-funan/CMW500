# Configuring Physical Cell Setup

Module: NBIoT Signaling
Source: 447f6ee3521e440f.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring Physical Cell Setup
Configuring Physical Cell Setup
// *****************************************************************************
// Select the UL subcarrier spacing and define the physical cell ID.
// *****************************************************************************
CONFigure:NIOT:SIGN:CELL:SCSPacing S15K
CONFigure:NIOT:SIGN:CELL:PCID 10
// *****************************************************************************
// Configure the standalone operation mode.
// *****************************************************************************
CONFigure:NIOT:SIGN:CELL:OPERmode SALM
// *****************************************************************************
// Alternatively, configure the in-band operation mode.
// *****************************************************************************
CONFigure:NIOT:SIGN:CELL:OPERmode IBOP
CONFigure:NIOT:SIGN:CELL:IBGBand:CRSize CRS2
CONFigure:NIOT:SIGN:CELL:IBGBand:IPCI SAME
CONFigure:NIOT:SIGN:CELL:IBGBand:IBCPosition 9
SENSe:NIOT:SIGN:CELL:IBGBand:FREQuency:DL?
SENSe:NIOT:SIGN:CELL:IBGBand:FREQuency:UL?
SENSe:NIOT:SIGN:CELL:IBGBand:CHANnel:OFFSet:DL?
SENSe:NIOT:SIGN:CELL:IBGBand:CHANnel:OFFSet:UL?
// *****************************************************************************
// Alternatively, configure the guard-band operation mode.
// *****************************************************************************
CONFigure:NIOT:SIGN:CELL:OPERmode GBOP
CONFigure:NIOT:SIGN:CELL:IBGBand:GBCPosition LOW
SENSe:NIOT:SIGN:CELL:IBGBand:FREQuency:DL?
SENSe:NIOT:SIGN:CELL:IBGBand:FREQuency:UL?
SENSe:NIOT:SIGN:CELL:IBGBand:CHANnel:OFFSet:DL?
SENSe:NIOT:SIGN:CELL:IBGBand:CHANnel:OFFSet:UL?
// *****************************************************************************
// Configure settings for NPRACH.
// *****************************************************************************
CONFigure:NIOT:SIGN:CELL:NPRach:NOResponse OFF
CONFigure:NIOT:SIGN:CELL:NPRach:PRAMping S6
CONFigure:NIOT:SIGN:CELL:NPRach:PREFormat 1
CONFigure:NIOT:SIGN:CELL:NPRach:MAXTrans T10
Top