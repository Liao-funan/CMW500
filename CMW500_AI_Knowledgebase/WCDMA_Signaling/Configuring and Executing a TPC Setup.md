# Configuring and Executing a TPC Setup

Module: WCDMA Signaling
Source: cd598507e4be418d.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Configuring and Executing a TPC Setup
Configuring and Executing a TPC Setup
To execute a TPC pattern, a connection has to be established before, see previous sections.
// *****************************************************************************
// Set TPC parameters: active TPC setup (phase discontinuity up),
// algorithm and step size, precondition, and number of repetitions.
// Reach the precondition, execute the pattern, and query the state.
// *****************************************************************************
CONFigure:WCDMa:SIGN:UL:TPC:SET PHUP
CONFigure:WCDMa:SIGN:UL:TPC:MODE A1S2
CONFigure:WCDMa:SIGN:UL:TPCSet:PRECondition:PHUP MINP 
CONFigure:WCDMa:SIGN:UL:TPCSet:PCONfig:PHUP 4
CONFigure:WCDMa:SIGN:UL:TPC:PRECondition
CONFigure:WCDMa:SIGN:UL:TPC:PEXecute
CONFigure:WCDMa:SIGN:UL:TPC:STATe?    
// *****************************************************************************
// Configure other TPC setups: closed loop target power type, value and 
// offset, user defined pattern for single, continuous execution,
// precondition and number of repetitions for phase discontinuity down,
// preconditions for continuous and single user defined pattern execution,
// number of 0 bits for test step EF and GH, segmentation for test steps,
// pattern and number of repetitions for DC HSPA in-band emission.
// *****************************************************************************
CONFigure:WCDMa:SIGN:UL:TPC:TPOWer:REFerence DPCH
CONFigure:WCDMa:SIGN:UL:CARRier1:TPC:TPOWer -30
CONFigure:WCDMa:SIGN:UL:TPC:OFFSet 2
CONFigure:WCDMa:SIGN:UL:TPC:PATTern '000111'
CONFigure:WCDMa:SIGN:UL:TPCSet:PCONfig:PHDown 4
CONFigure:WCDMa:SIGN:UL:TPCSet:PRECondition:PHDown MINP 
CONFigure:WCDMa:SIGN:UL:TPCSet:PRECondition:CONTinuous MINP
CONFigure:WCDMa:SIGN:UL:TPCSet:PRECondition:SINGle MINP
CONFigure:WCDMa:SIGN:UL:TPCSet:PCONfig:TSEF 110
CONFigure:WCDMa:SIGN:UL:TPCSet:PCONfig:TSGH 70
CONFigure:WCDMa:SIGN:UL:TPCSet:PCONfig:TSSegment ON
CONFigure:WCDMa:SIGN:UL:TPCSet:PCONfig:DHIB UD, 12
Top