# Configuring  MIMO Settings

Module: LTE Signaling
Source: ef7d5751bd594e2a.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring  MIMO Settings
Configuring MIMO Settings
The following commands configure the PCC. To configure the SCC number <n>, substitute 
:PCC:
 by 
:SCC<n>:
.
// *****************************************************************************
// Select mode 4 (closed loop spatial multiplexing), DCI format 2 and
// two transmit antennas (MIMO 2x2). Query resulting transmission scheme.
// Select precoding matrix. Select number of layers.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:TRANsmission TM4
CONFigure:LTE:SIGN:CONNection:PCC:DCIFormat D2
CONFigure:LTE:SIGN:CONNection:PCC:NENBantennas TWO
SENSe:LTE:SIGN:CONNection:PCC:TSCHeme?
CONFigure:LTE:SIGN:CONNection:PCC:PMATrix PMI1
CONFigure:LTE:SIGN:CONNection:PCC:NOLayers L2
// *****************************************************************************
// Enable and specify static channel model for MIMO 2x2.
// Specify static channel model for MIMO 4x2.
// Enable and specify static channel model for MIMO 4x4.
// *****************************************************************************
CONF:LTE:SIGN:CONN:PCC:SCHModel:ENABle ON
CONF:LTE:SIGN:CONN:PCC:SCHModel 0.9,0,45,0.1,45,0
CONF:LTE:SIGN:CONN:PCC:SCHModel:MIMO42 0.1,0,0.2,0,0.3,0,0.4,270,0.4,270,0.3,90,
    0.2,90,0.1,180
CONF:LTE:SIGN:CONN:PCC:SCHModel:ENABle:MIMO44 ON
CONF:LTE:SIGN:CONN:PCC:SCHModel:MIMO44 0.4,0,0.3,0,0.2,0,0.1,270,0.1,270,0.2,90,
    0.3,90,0.4,180,0.4,45,0.3,45,0.2,270,0.1,270,0.1,45,0.2,45,0.3,90,0.4,90
// *****************************************************************************
// Configure port 0 mapping for TM 7.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:PZERo:MAPPing R1R2
// *****************************************************************************
// Enable beamforming, configure dual-layer beamforming for TM 8. Configure
// the beamforming matrix and the channel matrix for TM 8.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:BEAMforming:MODE ON
CONFigure:LTE:SIGN:CONNection:PCC:BEAMforming:NOLayers L2
CONFigure:LTE:SIGN:CONNection:PCC:BEAMforming:MATRix 0,0,0.4,0.6,270,15
CONFigure:LTE:SIGN:CONNection:PCC:TM8:CHMatrix 0.9,45,0.1,45,0.9,0,0.1,0
// *****************************************************************************
// Configure parameters for TM 9:
// Select number of antennas, number of code words, second precoding matrix.
// Set signaled CSI-RS power, antenna ports, configuration and subframe
// configuration. Set zero power CSI-RS bitmap and subframe configuration.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:TM9:NTXantennas FOUR
CONFigure:LTE:SIGN:CONNection:PCC:TM9:CODewords TWO
CONFigure:LTE:SIGN:CONNection:PCC:TM9:PMATrix PMI3
CONFigure:LTE:SIGN:CONNection:PCC:TM9:CSIRs:POWer 0
CONFigure:LTE:SIGN:CONNection:PCC:TM9:CSIRs:APORts P1516
CONFigure:LTE:SIGN:CONNection:PCC:TM9:CSIRs:RESource 11
CONFigure:LTE:SIGN:CONNection:PCC:TM9:CSIRs:SUBFrame 8
CONFigure:LTE:SIGN:CONNection:PCC:TM9:ZP:BITS #B1010000000000000
CONFigure:LTE:SIGN:CONNection:PCC:TM9:ZP:CSIRs:SUBFrame 8
// *****************************************************************************
// Configure channel matrix for TM 9: 2x2, 4x2, 8x2 and 4x4.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:PCC:TM9:CMATrix:TWO1 0.9,0,45
CONFigure:LTE:SIGN:CONNection:PCC:TM9:CMATrix:TWO2 0.1,45,0
CONFigure:LTE:SIGN:CONNection:PCC:TM9:CMATrix:FOUR1 0.1,0,0.2,0,0.3,0,270
CONFigure:LTE:SIGN:CONNection:PCC:TM9:CMATrix:FOUR2 0.4,270,0.3,90,0.2,90,180
CONFigure:LTE:SIGN:CONNection:PCC:TM9:CMATrix:EIGHt1 0.05,15,0.05,30,0.1,15,0.1,
    30,0.15,15,0.15,30,0.2,15,30
CONFigure:LTE:SIGN:CONNection:PCC:TM9:CMATrix:EIGHt2 0.2,30,0.2,15,0.15,30,0.15,
    15,0.1,30,0.1,15,0.05,30,15
CONFigure:LTE:SIGN:CONNection:PCC:TM9:CMATrix:MIMO44:LINE1 0.1,0,0.2,0,0.3,0,270
CONFigure:LTE:SIGN:CONNection:PCC:TM9:CMATrix:MIMO44:LINE2 0.2,0,0.3,0,0.4,270,0
CONFigure:LTE:SIGN:CONNection:PCC:TM9:CMATrix:MIMO44:LINE3 0.3,0,0.4,270,0.1,0,0
CONFigure:LTE:SIGN:CONNection:PCC:TM9:CMATrix:MIMO44:LINE4 0.4,270,0.1,0,0.2,0,0
Top