# Configuring DNS Server Settings

Module: Data Application Unit
Source: 751672c18a4747dd.htm

## 原始指令文档说明
Data Application Unit
 > 
Programming
 > 
Data Application Control
 > 
Configuring DNS Server Settings
Configuring DNS Server Settings
// *****************************************************************************
// Configure server types: primary internal and foreign, secondary foreign
// *****************************************************************************
CONFigure:DATA:CONTrol:DNS:PRIMary:STYPe IAForeign
CONFigure:DATA:CONTrol:DNS:SECondary:STYPe FOReign
// *****************************************************************************
// Query used primary and secondary DNS server addresses for IPv4 and IPv6.
// *****************************************************************************
SENSe:DATA:CONTrol:DNS:CURRent:IPVFour:PRIMary:ADDRess?
SENSe:DATA:CONTrol:DNS:CURRent:IPVFour:SECondary:ADDRess?
SENSe:DATA:CONTrol:DNS:CURRent:IPVSix:PRIMary:ADDRess?
SENSe:DATA:CONTrol:DNS:CURRent:IPVSix:SECondary:ADDRess?
// *****************************************************************************
// Configure primary and secondary addresses for foreign DNS servers.
// Specify whether an address received via DHCP overrides these addresses.
// *****************************************************************************
CONFigure:DATA:CONTrol:DNS:FOReign:IPVFour:PRIMary:ADDRess '192.168.168.181'
CONFigure:DATA:CONTrol:DNS:FOReign:IPVFour:SECondary:ADDRess '192.168.168.182'
CONFigure:DATA:CONTrol:DNS:FOReign:IPVSix:PRIMary:ADDRess 'fcb1:c014::2'
CONFigure:DATA:CONTrol:DNS:FOReign:IPVSix:SECondary:ADDRess 'fcb1:c014::3'
CONFigure:DATA:CONTrol:DNS:FOReign:UDHCp ON, OFF, ON, OFF
// *****************************************************************************
// Query the entries of the internal DNS server for type A/AAAA DNS queries.
// Add three new entries and delete the last one.
// Ensure that all queries are answered successfully. 
// *****************************************************************************
SENSe:DATA:CONTrol:DNS:LOCal:CATalog?
CONFigure:DATA:CONTrol:DNS:LOCal:ADD 'www.DAU-Home.com', '192.168.168.180'
CONFigure:DATA:CONTrol:DNS:LOCal:ADD 'www.DAU-Home.com', 'fcb1:c014::1'
CONFigure:DATA:CONTrol:DNS:LOCal:ADD 'nonsense', '1.1.1.1'
CONFigure:DATA:CONTrol:DNS:LOCal:DELete 'nonsense'
CONFigure:DATA:CONTrol:DNS:RESallquery ON
// *****************************************************************************
// Query the entries of the internal DNS server for type SRV DNS queries.
// Add two new entries and delete the last one.
// *****************************************************************************
SENSe:DATA:CONTrol:DNS:ASERvices:CATalog?
CONFigure:DATA:CONTrol:DNS:ASERvices:ADD 'pcscf', 'www.DAU-Home.com', UDP, 5060
CONFigure:DATA:CONTrol:DNS:ASERvices:ADD 'typo', 'www.x.y', UDP, 5070
CONFigure:DATA:CONTrol:DNS:ASERvices:DELete 'typo'
// *****************************************************************************
// Perform a test of the primary foreign DNS server:
// Specify the domain to be resolved, start the test and retrieve the results.
// *****************************************************************************
CONFigure:DATA:CONTrol:DNS:TEST:DOMain 'www.example.com'
CONFigure:DATA:CONTrol:DNS:TEST:STARt
SENSe:DATA:CONTrol:DNS:TEST:RESults?
// *****************************************************************************
// Start the internal DNS server.
// *****************************************************************************
SOURce:DATA:CONTrol:DNS:STATe ON
Top