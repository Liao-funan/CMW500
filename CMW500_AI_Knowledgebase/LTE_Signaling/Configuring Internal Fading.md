# Configuring Internal Fading

Module: LTE Signaling
Source: 991f033c6c4e4d18.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring Internal Fading
Configuring Internal Fading
The following commands configure the PCC. To configure the SCC number <n>, substitute 
:PCC:
 by 
:SCC<n>:
 (
:SSC1:
, 
:SCC2:
, ...).
/ *****************************************************************************
// Configure standard fading for the PCC downlink:
// Enable it and select a fading profile.
// *****************************************************************************
CONFigure:LTE:SIGN:FADing:PCC:FSIMulator:STANDard:ENABle ON
CONFigure:LTE:SIGN:FADing:PCC:FSIMulator:STANDard:PROFile EP5Low
// *****************************************************************************
// Configure extended fading for the PCC downlink:
// Enable it, select a fading profile, start fading automatically,
// set start seed, calculate insertion loss automatically,
// specify max Doppler frequency.
// *****************************************************************************
CONFigure:LTE:SIGN:FADing:PCC:FSIMulator:ENABle ON
CONFigure:LTE:SIGN:FADing:PCC:FSIMulator:PROFile EP5Low
CONFigure:LTE:SIGN:FADing:PCC:FSIMulator:RESTart:MODE AUTO
CONFigure:LTE:SIGN:FADing:PCC:FSIMulator:GLOBal:SEED 0
CONFigure:LTE:SIGN:FADing:PCC:FSIMulator:ILOSs:MODE NORMal
CONFigure:LTE:SIGN:FADing:PCC:FSIMulator:DSHift:MODE USER
CONFigure:LTE:SIGN:FADing:PCC:FSIMulator:DSHift 6
// *****************************************************************************
// Configure AWGN insertion for the PCC downlink:
// Enable AWGN, no frequency offset, set min noise/system BW ratio,
// set signal to noise ratio and query calculated noise power.
// *****************************************************************************
CONFigure:LTE:SIGN:FADing:PCC:AWGN:ENABle ON
CONFigure:LTE:SIGN:FADing:PCC:AWGN:FOFFset 0
CONFigure:LTE:SIGN:FADing:PCC:AWGN:BWIDth:RATio 1
CONFigure:LTE:SIGN:FADing:PCC:AWGN:SNRatio 1
CONFigure:LTE:SIGN:FADing:PCC:POWer:NOISe?
Top