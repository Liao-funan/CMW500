# Limit Settings

Module: LRWPAN Measurements
Source: 8b71750d7ae04710.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Programming
 > 
Limit Settings
Limit Settings
// *************************************************************************
// Define and enable transmit power limit.
// *************************************************************************
CONFigure:WPAN:MEAS:MEValuation:LIMit:PVTime -10,ON
// *************************************************************************
// Define and enable modulation limits.
// *************************************************************************
CONFigure:WPAN:MEAS:MEValuation:LIMit:FACCuracy 40,100000,ON,ON
CONFigure:WPAN:MEAS:MEValuation:LIMit:SRATe 40
CONFigure:WPAN:MEAS:MEValuation:LIMit:EVM:OFFSet 30,35,ON,ON,30,30,
    30,35,ON,ON,ON,ON
CONFigure:WPAN:MEAS:MEValuation:LIMit:EVM:ABSolute 30,35,ON,ON,30,30
    30,35,ON,ON,ON,ON
CONFigure:WPAN:MEAS:MEValuation:LIMit:LLEakage -30,ON
// *************************************************************************
// Define and enable spectrum limits.
// *************************************************************************
CONFigure:WPAN:MEAS:MEValuation:LIMit:SPECtrum -30,-10,ON
WAITKEY >Limit settings completed, press "OK" to start single-shot measurement<
Top