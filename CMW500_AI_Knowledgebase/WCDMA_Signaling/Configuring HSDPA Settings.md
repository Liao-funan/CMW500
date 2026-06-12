# Configuring HSDPA Settings

Module: WCDMA Signaling
Source: b4484876806c4640.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Configuring HSDPA Settings
Configuring HSDPA Settings
// *****************************************************************************
// Configure CQI feedback cycle, CQI repetition factor, and
// ACK/NACK repetition factor. 
// Configure UE category manually and use fixed reference channel.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CELL:HSDPa:CQI:FBCYcle 0.004
CONFigure:WCDMa:SIGN:CELL:HSDPa:CQI:RFACtor 2
CONFigure:WCDMa:SIGN:CELL:HSDPa:ANRFactor 1
CONFigure:WCDMa:SIGN:CELL:HSDPa:UECategory:MANual 13
CONFigure:WCDMa:SIGN:CELL:HSDPa:UECategory:REPorted OFF
CONFigure:WCDMa:SIGN:CELL:HSDPa:TYPE FIXed
// *****************************************************************************
// Select H-Set for fixed reference channel.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CELL:HSDPa:FIXed:HSET H1M2
// *****************************************************************************
// Configure a CQI reporting test channel: 
// Enable usage of second carrier, select a table index selection method 
// and configure all methods. Query the minimum inter TTI distance.
// Define the number of HARQ processes. Define the RV coding sequences.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CELL:CARRier2:HSDPa:CQI:ENABle ON
CONFigure:WCDMa:SIGN:CELL:HSDPa:CQI:TINDex SEQuence
CONFigure:WCDMa:SIGN:CELL:CARRier1:HSDPa:CQI:FIXed 17
CONFigure:WCDMa:SIGN:CELL:CARRier2:HSDPa:CQI:FIXed 17
CONFigure:WCDMa:SIGN:CELL:HSDPa:CQI:SEQuence 1, 15
CONFigure:WCDMa:SIGN:CELL:HSDPa:CQI:FOLLow 1, 15
CONFigure:WCDMa:SIGN:CELL:CARRier1:HSDPa:CQI:CONFormance 16
CONFigure:WCDMa:SIGN:CELL:CARRier2:HSDPa:CQI:CONFormance 17
CONFigure:WCDMa:SIGN:CELL:HSDPa:CQI:CONFormance:MODE OFF
CONFigure:WCDMa:SIGN:CELL:HSDPa:CQI:TTI?
CONFigure:WCDMa:SIGN:CELL:HSDPa:CQI:HARQ 5
CONFigure:WCDMa:SIGN:CELL:HSDPa:CQI:RVCSequences:QPSK UDEFined
CONFigure:WCDMa:SIGN:CELL:HSDPa:CQI:RVCSequences:QAM16 UDEFined
CONFigure:WCDMa:SIGN:CELL:HSDPa:CQI:RVCSequences:QAM64 UDEFined
CONFigure:WCDMa:SIGN:CELL:HSDPa:CQI:RVCSequences:QPSK:UDEFined 3,1,2,3
CONFigure:WCDMa:SIGN:CELL:HSDPa:CQI:RVCSequences:QAM16:UDEFined 4,3,6,5,4
CONFigure:WCDMa:SIGN:CELL:HSDPa:CQI:RVCSequences:QAM64:UDEFined 2,2,4
// *****************************************************************************
// Configure a user defined HSDPA channel:
// Enable usage of second carrier, configure the minimum inter TTI distance,
// number of HARQ processes, transport block size index,
// number of channelization codes, modulation scheme, and RV coding sequences.
// Query the size of the IR buffer.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CELL:CARRier2:HSDPa:UDEFined:ENABle ON
CONFigure:WCDMa:SIGN:CELL:CARRier1:HSDPa:UDEFined:TTI 3
CONFigure:WCDMa:SIGN:CELL:CARRier2:HSDPa:UDEFined:TTI 3
CONFigure:WCDMa:SIGN:CELL:HSDPa:UDEFined:HARQ 5
CONFigure:WCDMa:SIGN:CELL:CARRier1:HSDPa:UDEFined:TBLock 42
CONFigure:WCDMa:SIGN:CELL:CARRier2:HSDPa:UDEFined:TBLock 42
CONFigure:WCDMa:SIGN:CELL:CARRier1:HSDPa:UDEFined:NCODes 3
CONFigure:WCDMa:SIGN:CELL:CARRier2:HSDPa:UDEFined:NCODes 3
CONFigure:WCDMa:SIGN:CELL:CARRier1:HSDPa:UDEFined:MODulation QPSK
CONFigure:WCDMa:SIGN:CELL:CARRier2:HSDPa:UDEFined:MODulation QPSK
CONFigure:WCDMa:SIGN:CELL:HSDPa:UDEFined:RVCSequences:QPSK UDEFined
CONFigure:WCDMa:SIGN:CELL:HSDPa:UDEFined:RVCSequences:QAM16 UDEFined
CONFigure:WCDMa:SIGN:CELL:HSDPa:UDEFined:RVCSequences:QAM64 UDEFined
CONFigure:WCDMa:SIGN:CELL:HSDPa:UDEFined:RVCSequences:QPSK:UDEFined 3,1,2,3
CONFigure:WCDMa:SIGN:CELL:HSDPa:UDEFined:RVCSequences:QAM16:UDEFined 4,3,6,5,4
CONFigure:WCDMa:SIGN:CELL:HSDPa:UDEFined:RVCSequences:QAM64:UDEFined 2,2,4
CONFigure:WCDMa:SIGN:CELL:HSDPa:UDEFined:IRBuffer?
Top