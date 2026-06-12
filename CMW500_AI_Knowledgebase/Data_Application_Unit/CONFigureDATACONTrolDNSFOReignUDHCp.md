# CONFigureDATACONTrolDNSFOReignUDHCp

Module: Data Application Unit
Source: dcb2c0aeadce4bad.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
DNS Server Settings
 > 
CONFigure:DATA:CONTrol:DNS:FOReign:UDHCp
CONFigure:DATA:CONTrol:DNS:FOReign:UDHCp 
<PrimIP4>, <PrimIP6>, <SecIP4>, <SecIP6>
Specifies whether an IP address received via DHCPv4 / DHCPv6 is used (if available) instead of the IPv4 / IPv6 address configured statically for the foreign DNS server.
Parameters:
<PrimIP4>
OFF |
 
 ON
DHCPv4 address, primary DNS server
*RST:
ON
<PrimIP6>
OFF |
 
 ON
DHCPv6 address, primary DNS server
*RST:
ON
<SecIP4>
OFF |
 
 ON
DHCPv4 address, secondary DNS server
*RST:
ON
<SecIP6>
OFF |
 
 ON
DHCPv6 address, secondary DNS server
*RST:
ON
Example: 
See 
"Configuring DNS Server Settings"
Firmware/Software: 
V3.2.20
Manual operation: 
See 
"Foreign DNS server"
Top