# Configuring HSUPA Settings

Module: WCDMA Signaling
Source: 4a350e6310f84508.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Configuring HSUPA Settings
Configuring HSUPA Settings
// *****************************************************************************
// Configure 10 ms TTI, RLC PDU size, UE category and E-TFCI table index.
// Alternatively enable and configure flexible PDU for dual uplink.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CELL:HSUPa:TTI M10
CONFigure:WCDMa:SIGN:CELL:HSUPa:PDU 344
CONFigure:WCDMa:SIGN:CELL:HSUPa:UECategory:MANual 9
CONFigure:WCDMa:SIGN:CELL:HSUPa:UECategory:REPorted OFF
CONFigure:WCDMa:SIGN:CELL:HSUPa:ETFCi:TINDex 1
CONFigure:WCDMa:SIGN:CELL:HSUPa:PDU:FLEXible ON
CONFigure:WCDMa:SIGN:CELL:HSUPa:PDU:FLEXible 12040
// *****************************************************************************
// Configure HARQ RV configuration, minimum set E-TFCI, happy bit delay
// condition, puncturing limit non-max, maximum channelization code, and
// initial serving grant, modulation and E-AGCH table index.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CELL:CARRier1:HSUPa:HRVersion RV0
CONFigure:WCDMa:SIGN:CELL:CARRier1:HSUPa:ETFCi:MSET 10
CONFigure:WCDMa:SIGN:CELL:CARRier2:HSUPa:HRVersion RV0
CONFigure:WCDMa:SIGN:CELL:CARRier2:HSUPa:ETFCi:MSET 10
CONFigure:WCDMa:SIGN:CELL:HSUPa:HBDC 50
CONFigure:WCDMa:SIGN:CELL:HSUPa:PLPLnonmax 0.88
CONFigure:WCDMa:SIGN:CELL:HSUPa:MCCode S4
CONFigure:WCDMa:SIGN:CELL:HSUPa:ISGRant 14, SECondary
CONFigure:WCDMa:SIGN:CELL:HSUPa:MODulation Q16
CONFigure:WCDMa:SIGN:CELL:HSUPa:EAGCh:TINDex 0
// *****************************************************************************
// Configure the HARQ profile: power offset and max retransmissions.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CELL:HSUPa:HARQ:POFFset 1
CONFigure:WCDMa:SIGN:CELL:HSUPa:HARQ:RETX 8
// *****************************************************************************
// Configure E-AGCH settings:
// E-RNTIs of UE, absolute grant pattern (length, indices, scopes, and types),
// pattern repetition and unscheduled TTIs.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CELL:CARRier:HSUPa:EAGCh:UEID #HAAAB, #H12AB
CONFigure:WCDMa:SIGN:CELL:CARRier:HSUPa:EAGCh:PATTern:LENGth 4
CONFigure:WCDMa:SIGN:CELL:CARRier:HSUPa:EAGCh:PATTern:INDex 10,12,14,16
CONFigure:WCDMa:SIGN:CELL:CARRier:HSUPa:EAGCh:PATTern:SCOPe ON,ON,ON,ON
CONFigure:WCDMa:SIGN:CELL:CARRier:HSUPa:EAGCh:PATTern:TYPE ON,OFF,ON,OFF
CONFigure:WCDMa:SIGN:CELL:CARRier:HSUPa:EAGCh:PATTern:REPetition CONT
CONFigure:WCDMa:SIGN:CELL:HSUPa:EAGCh:UTTI DUMMy
// *****************************************************************************
// Configure E-RGCH / E-HICH settings:
// fill-up frames with dummies
// E-HICH: react on UL CRC, signature 2
// E-RGCH: signature 3, continuous user defined 4-bit pattern 0011
// *****************************************************************************
CONFigure:WCDMa:SIGN:CELL:CARRier:HSUPa:EHRCh:FUFDummies ON
CONFigure:WCDMa:SIGN:CELL:CARRier:HSUPa:EHICh:MODE CRC
CONFigure:WCDMa:SIGN:CELL:CARRier:HSUPa:EHICh:SIGNature 2
CONFigure:WCDMa:SIGN:CELL:CARRier:HSUPa:ERGCh:SIGNature 3
CONFigure:WCDMa:SIGN:CELL:CARRier:HSUPa:ERGCh:MODE CONT
CONFigure:WCDMa:SIGN:CELL:CARRier:HSUPa:ERGCh:PATTern:LENGth 4
CONFigure:WCDMa:SIGN:CELL:CARRier:HSUPa:ERGCh:PATTern '0011----'
Top