# Configuring Physical Channel UL Settings

Module: WCDMA Signaling
Source: 6734294c2e544e16.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Configuring Physical Channel UL Settings
Configuring Physical Channel UL Settings
// *****************************************************************************
// Configure maximum allowed UE power, DPCCH power offset,
// and UL scrambling code. Query expected initial DPCCH power.
// *****************************************************************************
CONFigure:WCDMa:SIGN:UL:MUEPower 27
CONFigure:WCDMa:SIGN:UL:CARRier:POFFset -77
CONFigure:WCDMa:SIGN:UL:UEPClass:REPorted OFF 
CONFigure:WCDMa:SIGN:UL:UEPClass:MANual PC4
CONFigure:WCDMa:SIGN:UL:CARRier:SCODe #H31F
SENSe:WCDMa:SIGN:UL:EIPower?
// *****************************************************************************
// Configure open loop power control: initial preamble power offset
// and estimated UL interference. Query expected initial preamble power.
// *****************************************************************************
CONFigure:WCDMa:SIGN:UL:OLPControl:CVALue -28
CONFigure:WCDMa:SIGN:UL:OLPControl:INTerference -90
SENSe:WCDMa:SIGN:UL:OLPControl:EIPPower?
// *****************************************************************************
// Configure PRACH settings: available preamble signatures and subchannels,
// maximum preamble retransmission per cycle, preambles to be received before
// AICH transmission, preamble step size, maximum number of cycles,
// message power offset, TTI length, and DRX cycle length.
// *****************************************************************************
CONFigure:WCDMa:SIGN:UL:PRACh:PREamble:SIGNature #B1111000011110000
CONFigure:WCDMa:SIGN:UL:PRACh:PREamble:SUBChannels #B000000000011
CONFigure:WCDMa:SIGN:UL:PRACh:PREamble:MRETrans 7
CONFigure:WCDMa:SIGN:UL:PRACh:PREamble:AICH 6
CONFigure:WCDMa:SIGN:UL:PRACh:PREamble:SSIZe 2
CONFigure:WCDMa:SIGN:UL:PRACh:PREamble:MCYCles 3
CONFigure:WCDMa:SIGN:UL:PRACh:MESSage:POFFset -4
CONFigure:WCDMa:SIGN:UL:PRACh:MESSage:LENGth 0.01
CONFigure:WCDMa:SIGN:UL:PRACh:DRXCycle 9
// *****************************************************************************
// Configure gain factors βc and βd for RMC 1 and 2 (12.2 kbps and 64 kbps),
// for voice connections and for video connections.
// Configure gain factors and power offsets for HSDPA connections.
// Configure gain factor related parameters for HSUPA connections.
// *****************************************************************************
CONFigure:WCDMa:SIGN:UL:GFACtor:RMC1 7,15; RMC2 4,15
CONFigure:WCDMa:SIGN:UL:GFACtor:VOICe 10,15
CONFigure:WCDMa:SIGN:UL:GFACtor:VIDeo 8,15
CONFigure:WCDMa:SIGN:UL:GFACtor:PDATa128 8,15
CONFigure:WCDMa:SIGN:UL:GFACtor:PDATa384 8,15
CONFigure:WCDMa:SIGN:UL:GFACtor:HSDPa 8,15,5,5,2
CONFigure:WCDMa:SIGN:UL:GFACtor:HSUPa:EDPCch 6
CONFigure:WCDMa:SIGN:UL:GFACtor:HSUPa:ETFCi:NUMBer 2
CONFigure:WCDMa:SIGN:UL:GFACtor:HSUPa:ETFCi:REFerence 11,68,71,77,81,90,100,127
CONFigure:WCDMa:SIGN:UL:GFACtor:HSUPa:ETFCi:POFFset 4,15,21,26,27,28,29,29
CONFigure:WCDMa:SIGN:UL:GFACtor:HSUPa:ETFCi:BOOSt 100
CONFigure:WCDMa:SIGN:UL:GFACtor:HSUPa:DTTP 5
CONFigure:WCDMa:SIGN:UL:GFACtor:HSUPa:ETFCi:BOOSt ON
CONFigure:WCDMa:SIGN:UL:GFACtor:HSUPa:EDPFormula INT
Top