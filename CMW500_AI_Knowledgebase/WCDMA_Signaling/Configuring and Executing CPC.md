# Configuring and Executing CPC

Module: WCDMA Signaling
Source: c25595f5636b4e8f.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Configuring and Executing CPC
Configuring and Executing CPC
Enable CPC before HSPA connection.
// *****************************************************************************
// Set DTX-DRX timing information, send HS-SCCH order, and query the response.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CELL:CPC:DTRX:DELay 32
CONFigure:WCDMa:SIGN:CELL:CPC:DTRX:OFFSet 1
CONFigure:WCDMa:SIGN:CELL:CPC:HLOPeration:SFORmat 4
CONFigure:WCDMa:SIGN:CELL:CPC:HORDer:SEND
CONFigure:WCDMa:SIGN:CELL:CPC:HORDer:SEND?
// *****************************************************************************
// Set UL DTX, configure cycle 1 and 2.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CELL:CPC:UDTX:ENABle ON
CONFigure:WCDMa:SIGN:CELL:CPC:UDTX:LPLength 15
CONFigure:WCDMa:SIGN:CELL:CPC:UDTX:CQITimer 32
CONFigure:WCDMa:SIGN:CELL:CPC:UDTX:CYCLe1:APATtern:TTI10 10
CONFigure:WCDMa:SIGN:CELL:CPC:UDTX:CYCLe1:BURSt 2
CONFigure:WCDMa:SIGN:CELL:CPC:UDTX:CYCLe2:ITHReshold 16
CONFigure:WCDMa:SIGN:CELL:CPC:UDTX:CYCLe2:DSG 32
// *****************************************************************************
// Set DL DRX, configure UE grant monitoring.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CELL:CPC:DDRX:ENABle ON
CONFigure:WCDMa:SIGN:CELL:CPC:DDRX:CYCLe:APATtern 10
CONFigure:WCDMa:SIGN:CELL:CPC:DDRX:CYCLe:ITHReshold 16
CONFigure:WCDMa:SIGN:CELL:CPC:DDRX:GMONitoring:ENABle ON
CONFigure:WCDMa:SIGN:CELL:CPC:DDRX:GMONitoring:ITHReshold 128
// *****************************************************************************
// Set E-DCH TX start time restriction.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CELL:CPC:MAC:CYCLe:TTI10 10
CONFigure:WCDMa:SIGN:CELL:CPC:MAC:CYCLe:ITHReshold 128
// *****************************************************************************
// Activate HS-SCCH less operation.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CELL:CPC:HLOPeration:ENABle ON
// *****************************************************************************
// Specify the transport block format and support of seccond HD-PDSCH
// for the four preconfiguration sets. Select four sets to be signaled
// to the UE. Enable HS-SCCH less operation for second 
// carrier in UL and DL. Send HS-SCCH order and query the response.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CELL:CPC:HLOPeration:TBLock1 41
CONFigure:WCDMa:SIGN:CELL:CPC:HLOPeration:SCSupport1 ON
CONFigure:WCDMa:SIGN:CELL:CPC:HLOPeration:TBLock2 51
CONFigure:WCDMa:SIGN:CELL:CPC:HLOPeration:SCSupport2 OFF
CONFigure:WCDMa:SIGN:CELL:CPC:HLOPeration:TBLock3 63
CONFigure:WCDMa:SIGN:CELL:CPC:HLOPeration:SCSupport3 OFF
CONFigure:WCDMa:SIGN:CELL:CPC:HLOPeration:TBLock4 90
CONFigure:WCDMa:SIGN:CELL:CPC:HLOPeration:SCSupport4 OFF
CONFigure:WCDMa:SIGN:CELL:CPC:HLOPeration:NTBLock 2
CONFigure:WCDMa:SIGN:CELL:CPC:HORDer:SEND
CONFigure:WCDMa:SIGN:CELL:CPC:HORDer:SEND?
Top