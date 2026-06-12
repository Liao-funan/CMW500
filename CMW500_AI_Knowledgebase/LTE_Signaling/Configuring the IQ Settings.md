# Configuring the IQ Settings

Module: LTE Signaling
Source: c335a64ca0d749c3.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring the I/Q Settings
Configuring the I/Q Settings
The following commands configure the PCC. To configure the SCC number <n>, substitute 
:PCC:
 by 
:SCC<n>:
.
// *****************************************************************************
// Query the properties of the outgoing baseband signal, required to configure
// the baseband input of the connected instrument. Configure the baseband input
// according to the baseband output of the connected instrument.
// *****************************************************************************
SENSe:LTE:SIGN:IQOut:PCC:PATH1?
SENSe:LTE:SIGN:IQOut:PCC:PATH2?
CONFigure:LTE:SIGN:IQIN:PCC:PATH1 -30, -20
CONFigure:LTE:SIGN:IQIN:PCC:PATH2 -30, -20
Top