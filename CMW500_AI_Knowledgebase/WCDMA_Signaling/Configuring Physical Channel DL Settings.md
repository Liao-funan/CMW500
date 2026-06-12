# Configuring Physical Channel DL Settings

Module: WCDMA Signaling
Source: fb579a0034a04eef.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Configuring Physical Channel DL Settings
Configuring Physical Channel DL Settings
// *****************************************************************************
// Set level and channelization code of S-CCPCH
// *****************************************************************************
CONFigure:WCDMa:SIGN:DL:LEVel:SCCPch -5
CONFigure:WCDMa:SIGN:DL:CODE:SCCPch 6
// *****************************************************************************
// Configure 2 HS-SCCH: level, channelization code, UE ID, and dummy UE ID
// *****************************************************************************
CONFigure:WCDMa:SIGN:DL:CARRier1:LEVel:HSSCch1 -10
CONFigure:WCDMa:SIGN:DL:CARRier1:LEVel:HSSCch2 -9
CONFigure:WCDMa:SIGN:DL:CARRier1:CODE:HSSCch1 100
CONFigure:WCDMa:SIGN:DL:CARRier1:CODE:HSSCch2 101
CONFigure:WCDMa:SIGN:DL:CARRier1:HSSCch:UEID #HEEEE
CONFigure:WCDMa:SIGN:DL:CARRier1:HSSCch1:IDDummy #HEEE1
CONFigure:WCDMa:SIGN:DL:CARRier1:HSSCch2:IDDummy #HEEE2
// *****************************************************************************
// Configure HS-PDSCH: level and first channelization code number
// *****************************************************************************
CONFigure:WCDMa:SIGN:DL:CARRier1:LEVel:HSPDsch -8
CONFigure:WCDMa:SIGN:DL:CARRier1:CODE:HSPDsch 2
// *****************************************************************************
// Set level and channelization code of E-AGCH, E-HICH, and E-RGCH.
// *****************************************************************************
CONFigure:WCDMa:SIGN:DL:CARRier:LEVel:EAGCh -10
CONFigure:WCDMa:SIGN:DL:CARRier:LEVel:EHICh -13
CONFigure:WCDMa:SIGN:DL:CARRier:LEVel:ERGCh -13
CONFigure:WCDMa:SIGN:DL:CARRier:CODE:EAGCh 252
CONFigure:WCDMa:SIGN:DL:CARRier:CODE:EHICh 123
// *****************************************************************************
// Query and adjust accumulated power.
// Select OCNS type R6 and query OCNS power.
// Check for channelization code conflicts.
// *****************************************************************************
CONFigure:WCDMa:SIGN:DL:CARRier1:LEVel:APOWer?
CONFigure:WCDMa:SIGN:DL:LEVel:ADJust
CONFigure:WCDMa:SIGN:DL:CARRier1:OCNS:TYPE R6
CONFigure:WCDMa:SIGN:DL:CARRier1:OCNS:LEVel?
CONFigure:WCDMa:SIGN:DL:CARRier1:CODE:CONFlict?
// *****************************************************************************
// Adjust enhanced settings.  
// *****************************************************************************
CONFigure:WCDMa:SIGN:DL:CARRier1:ENHanced:PCPich:SLEVel 30
CONFigure:WCDMa:SIGN:DL:ENHanced:SCPich:SSCode #HA
CONFigure:WCDMa:SIGN:DL:ENHanced:SCPich:PHASe -90
CONFigure:WCDMa:SIGN:DL:ENHanced:AICH:TTIMing 4
CONFigure:WCDMa:SIGN:DL:ENHanced:AICH:ACKNowledge NEG
CONFigure:WCDMa:SIGN:DL:ENHanced:DPCH:SSCode #HB
CONFigure:WCDMa:SIGN:DL:ENHanced:DPCH:PHASe SCP
CONFigure:WCDMa:SIGN:DL:ENHanced:DPCH:TOFFset 10
CONFigure:WCDMa:SIGN:DL:CARRier1:ENHanced:HSSCch:SELection AUTomatic
CONFigure:WCDMa:SIGN:DL:CARRier1:ENHanced:HSSCch:NUMBer 2
CONFigure:WCDMa:SIGN:DL:CARRier1:ENHanced:HSSCch:USFRames DTX
CONFigure:WCDMa:SIGN:DL:CARRier1:ENHanced:HSPDsch:POFFset AUTO
CONFigure:WCDMa:SIGN:DL:CARRier1:ENHanced:HSPDsch:USFRames DTX
// *****************************************************************************
// Configure carrier 2.
// *****************************************************************************
CONFigure:WCDMa:SIGN:DL:CARRier2:LEVel:PCPich -5
CONFigure:WCDMa:SIGN:DL:CARRier2:LEVel:HSSCch1 -10
CONFigure:WCDMa:SIGN:DL:CARRier2:LEVel:HSSCch2 -9
CONFigure:WCDMa:SIGN:DL:CARRier2:LEVel:HSPDsch -8
CONFigure:WCDMa:SIGN:DL:CARRier2:CODE:HSSCch1 100
CONFigure:WCDMa:SIGN:DL:CARRier2:CODE:HSSCch2 101
CONFigure:WCDMa:SIGN:DL:CARRier2:CODE:HSPDsch 2
CONFigure:WCDMa:SIGN:DL:CARRier2:HSSCch:UEID #HEEEE
CONFigure:WCDMa:SIGN:DL:CARRier2:HSSCch1:IDDummy #HEEE1
CONFigure:WCDMa:SIGN:DL:CARRier2:HSSCch2:IDDummy #HEEE2
CONFigure:WCDMa:SIGN:DL:CARRier2:OCNS:TYPE R6
CONFigure:WCDMa:SIGN:DL:CARRier2:LEVel:APOWer?
CONFigure:WCDMa:SIGN:DL:LEVel:ADJust
CONFigure:WCDMa:SIGN:DL:CARRier2:OCNS:LEVel?
CONFigure:WCDMa:SIGN:DL:CARRier2:CODE:CONFlict?
CONFigure:WCDMa:SIGN:DL:CARRier2:ENHanced:PCPich:SLEVel 30
CONFigure:WCDMa:SIGN:DL:CARRier2:ENHanced:HSSCch:SELection AUTomatic
CONFigure:WCDMa:SIGN:DL:CARRier2:ENHanced:HSSCch:NUMBer 2
CONFigure:WCDMa:SIGN:DL:CARRier2:ENHanced:HSSCch:USFRames DTX
CONFigure:WCDMa:SIGN:DL:CARRier2:ENHanced:HSPDsch:POFFset AUTO
CONFigure:WCDMa:SIGN:DL:CARRier2:ENHanced:HSPDsch:USFRames DTX
// *****************************************************************************
// Enable downlink power control, specify mode, step, DPCH level range,
// DPCH level sequence, and strategy. Execute the commands.
// Query the sequence state.
// Specify target DTCH link quality, target TPC error rate and
// F-DPCH slot format. Query actual reported DPCH level.
// *****************************************************************************
CONFigure:WCDMa:SIGN:DL:PCONtrol:MODE ON,M0
CONFigure:WCDMa:SIGN:DL:PCONtrol:STEP 1
CONFigure:WCDMa:SIGN:DL:ENHanced:DPCH:RANGe -30,0 
CONFigure:WCDMa:SIGN:DL:ENHanced:DPCH:LSEQuence -20,-26,-22,-18
CONFigure:WCDMa:SIGN:DL:ENHanced:DPCH:RXLStrategy BF
CONFigure:WCDMa:SIGN:DL:ENHanced:DPCH:LSEQuence:EXECute
CONFigure:WCDMa:SIGN:DL:ENHanced:DPCH:LSEQuence:STATe?
CONFigure:WCDMa:SIGN:DL:PCONtrol:DTQuality 2
CONFigure:WCDMa:SIGN:DL:PCONtrol:FTERate 1
CONFigure:WCDMa:SIGN:DL:CARRier1:ENHanced:DPCH:FSFormat 2
SENSe:WCDMa:SIGN:DL:CARRier1:ENHanced:DPCH:REPorted?
Top