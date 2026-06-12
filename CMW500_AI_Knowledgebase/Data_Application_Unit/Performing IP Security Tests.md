# Performing IP Security Tests

Module: Data Application Unit
Source: d3d91e1b9754452f.htm

## 原始指令文档说明
Data Application Unit
 > 
Programming
 > 
Data Application Measurements
 > 
Performing IP Security Tests
Performing IP Security Tests
// *****************************************************************************
// Add an entry to the keyword list. Query the keyword list.
// Alternatively, import a keyword list from a file.
// *****************************************************************************
CONFigure:DATA:MEAS:IPANalysis:IPCSecurity:KYWord:SEARch:ADD "pwd"
SENSe:DATA:MEAS:IPANalysis:IPCSecurity:KYWord:SEARch:LIST?
CONF:DATA:MEAS:IPANalysis:IPCSecurity:KYWord:SEARch:IMPort "myKeywordList.txt"
// *****************************************************************************
// Start the IP Analysis application.
// *****************************************************************************
INIT:DATA:MEAS:IPANalysis
// *****************************************************************************
// Query the results on the applications tab.
// *****************************************************************************
SENSe:DATA:MEAS:IPANalysis:IPCSecurity:APPLications?
FETCh:DATA:MEAS:IPANalysis:IPCSecurity:CAPPlication? "Wikipedia"
// *****************************************************************************
// Query handshake information for a connection.
// *****************************************************************************
FETCh:DATA:MEAS:IPAN:IPCSecurity:CAPPlication:HANDshake:OFFered:VERSion? 3
FETCh:DATA:MEAS:IPAN:IPCSecurity:CAPPlication:HANDshake:OFFered:CIPSuite? 3
FETCh:DATA:MEAS:IPAN:IPCSecurity:CAPPlication:HANDshake:OFFered:COMPression? 3
FETCh:DATA:MEAS:IPAN:IPCSecurity:CAPPlication:HANDshake:OFFered:SHALgorithm? 3
FETCh:DATA:MEAS:IPAN:IPCSecurity:CAPPlication:HANDshake:OFFered:ECURve? 3
FETCh:DATA:MEAS:IPAN:IPCSecurity:CAPPlication:HANDshake:OFFered:ECPFormat? 3
FETCh:DATA:MEAS:IPAN:IPCSecurity:CAPPlication:HANDshake:OFFered:SRINdication? 3
// *****************************************************************************
// Query the keyword search results.
// *****************************************************************************
FETCh:DATA:MEAS:IPANalysis:IPCSecurity:KYWord:SEARch?
// *****************************************************************************
// Configure a port scan.
// *****************************************************************************
CONFigure:DATA:MEAS:IPANalysis:IPCSecurity:PRTScan:DESTip '172.22.1.110'
CONFigure:DATA:MEAS:IPANalysis:IPCSecurity:PRTScan:RANGe 5000, 5999
CONFigure:DATA:MEAS:IPANalysis:IPCSecurity:PRTScan:LAYer:PROTocol TCP
CONFigure:DATA:MEAS:IPANalysis:IPCSecurity:PRTScan:TIMeout 30
// *****************************************************************************
// Start a port scan and check that it is running.
// Wait 10 s, query the results and stop the port scan.
// *****************************************************************************
CONFigure:DATA:MEAS:IPANalysis:IPCSecurity:PRTScan:STARt
SENSe:DATA:MEAS:IPANalysis:IPCSecurity:PRTScan:STATus?
PAUSE 10
FETCh:DATA:MEAS:IPANalysis:IPCSecurity:PRTScan?
CONFigure:DATA:MEAS:IPANalysis:IPCSecurity:PRTScan:STOP
Top