# Configuring DL Power Levels

Module: LTE Signaling
Source: 246d1cdcdecd4546.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring DL Power Levels
Configuring DL Power Levels
The following commands configure the PCC. To configure the SCC number <n>, substitute 
:PCC:
 by 
:SCC<n>:
 (
:SSC1:
, 
:SCC2:
, ...).
// *****************************************************************************
// Define the RS EPRE level and the power of the DL channels and signals
// relative to the RS EPRE level. Query full cell BW power.
// *****************************************************************************
CONFigure:LTE:SIGN:DL:PCC:RSEPre:LEVel -80
CONFigure:LTE:SIGN:DL:PCC:PSS:POFFset -3
CONFigure:LTE:SIGN:DL:PCC:SSS:POFFset -3
CONFigure:LTE:SIGN:DL:PCC:PBCH:POFFset 0
CONFigure:LTE:SIGN:DL:PCC:PCFich:POFFset 0
CONFigure:LTE:SIGN:DL:PCC:PHICh:POFFset 0
CONFigure:LTE:SIGN:DL:PCC:PDCCh:POFFset -3
SENSe:LTE:SIGN:DL:PCC:FCPower?
// *****************************************************************************
// Configure the used CSI-RS power offset manually,
// independent from the signaled power offset.
// *****************************************************************************
CONFigure:LTE:SIGN:DL:PCC:CSIRs:MODE MANual
CONFigure:LTE:SIGN:DL:PCC:CSIRs:POFFset -10
// *****************************************************************************
// Enable the OFDMA channel noise generator.
// *****************************************************************************
CONFigure:LTE:SIGN:DL:PCC:OCNG ON
// *****************************************************************************
// Define power offset, power ratio index and antenna port power
// for calculation of the PDSCH power level.
// *****************************************************************************
CONFigure:LTE:SIGN:DL:PCC:PDSCh:PA ZERO
CONFigure:LTE:SIGN:DL:PCC:POWer:PORTs 0
CONFigure:LTE:SIGN:DL:PCC:PDSCh:RINDex 1
// *****************************************************************************
// Define the AWGN power level (also activates the AWGN interferer).
// *****************************************************************************
CONFigure:LTE:SIGN:DL:PCC:AWGN -100
Top