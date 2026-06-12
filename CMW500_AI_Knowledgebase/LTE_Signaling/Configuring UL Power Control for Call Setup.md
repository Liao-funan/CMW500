# Configuring UL Power Control for Call Setup

Module: LTE Signaling
Source: e510efaee02a45ab.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring UL Power Control for Call Setup
Configuring UL Power Control for Call Setup
// *****************************************************************************
// Enable joint UL power control.
// *****************************************************************************
CONFigure:LTE:SIGN:UL:JUPower ON
// *****************************************************************************
// Define the open loop nominal power directly (basic UL power configuration).
// Query the resulting parameter values signaled to the UE.
// *****************************************************************************
CONFigure:LTE:SIGN:UL:PCC:PUSCH:OLNPower -30
SENSe:LTE:SIGN:UL:PCC:APPower:RSPower:BASic?
SENSe:LTE:SIGN:UL:PCC:APPower:PIRPower:BASic?
SENSe:LTE:SIGN:UL:PCC:APPower:PNPusch:BASic?
SENSe:LTE:SIGN:UL:PCC:APPower:PCALpha:BASic?
SENSe:LTE:SIGN:UL:PCC:APPower:TPRRcsetup:BASic?
// *****************************************************************************
// Alternatively, enable advanced UL power configuration,
// define the parameter values to be signaled to the UE and
// query values calculated from the parameters.
// *****************************************************************************
CONFigure:LTE:SIGN:UL:PCC:APPower:EASettings ON
CONFigure:LTE:SIGN:UL:PCC:APPower:RSPower:ADVanced 15
CONFigure:LTE:SIGN:UL:PCC:APPower:PIRPower:ADVanced -100
CONFigure:LTE:SIGN:UL:PCC:APPower:PNPusch:ADVanced -81
CONFigure:LTE:SIGN:UL:PCC:APPower:PCALpha:ADVanced DOT7
CONFigure:LTE:SIGN:UL:PCC:APPower:TPRRcsetup:ADVanced OFF
SENSe:LTE:SIGN:UL:PCC:APPower:PATHloss?
SENSe:LTE:SIGN:UL:PCC:APPower:EPPPower?
SENSe:LTE:SIGN:UL:PCC:APPower:EOPower?
// *****************************************************************************
// Define maximum allowed UE power.
// *****************************************************************************
CONFigure:LTE:SIGN:UL:PCC:PMAX 3
Top