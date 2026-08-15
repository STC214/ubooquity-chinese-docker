$ErrorActionPreference = 'Stop'

Add-Type -AssemblyName System.IO.Compression.FileSystem

function Read-JarEntry([string] $JarPath, [string] $EntryName) {
    $archive = [System.IO.Compression.ZipFile]::OpenRead((Resolve-Path $JarPath))
    try {
        $entry = $archive.GetEntry($EntryName)
        if ($null -eq $entry) { throw "Missing JAR entry: $EntryName" }
        $reader = [System.IO.StreamReader]::new($entry.Open())
        try { return $reader.ReadToEnd() } finally { $reader.Dispose() }
    } finally {
        $archive.Dispose()
    }
}

function Assert-Match([string] $Name, [string] $Value, [string] $Pattern) {
    if ($Value -notmatch $Pattern) { throw "FAIL $Name" }
    Write-Output "PASS $Name"
}

function Assert-NoMatch([string] $Name, [string] $Value, [string] $Pattern) {
    if ($Value -match $Pattern) { throw "FAIL $Name" }
    Write-Output "PASS $Name"
}

function Assert-MatchCount([string] $Name, [string] $Value, [string] $Pattern, [int] $ExpectedCount) {
    $actualCount = ([regex]::Matches($Value, $Pattern)).Count
    if ($actualCount -ne $ExpectedCount) { throw "FAIL $Name expected=$ExpectedCount actual=$actualCount" }
    Write-Output "PASS $Name count=$actualCount"
}

$baseline = [System.IO.File]::ReadAllText("$PSScriptRoot\baseline\themes\default\library\page-library.html")
$modified = Read-JarEntry "$PSScriptRoot\..\Ubooquity.jar" 'themes/default/library/page-library.html'
$searchBar = Read-JarEntry "$PSScriptRoot\..\Ubooquity.jar" 'themes/default/library/inc-library-topbar-search.html'

Assert-NoMatch 'baseline_has_no_search_result_branch' $baseline '\{\{#isSearchResult\}\}'
Assert-Match 'baseline_uses_normal_topbar_unconditionally' $baseline '\{\{>library/inc-library-topbar\.html\}\}'
Assert-Match 'modified_selects_search_topbar' $modified '\{\{#isSearchResult\}\}[\s\S]*inc-library-topbar-search\.html'
Assert-Match 'modified_keeps_normal_topbar_for_browsing' $modified '\{\{\^isSearchResult\}\}[\s\S]*inc-library-topbar\.html'
Assert-Match 'search_previous_10_pages_is_post' $searchBar 'method="POST" action="\{\{prev10pageUrl\}\}"'
Assert-Match 'search_previous_page_is_post' $searchBar 'method="POST" action="\{\{prevPageUrl\}\}"'
Assert-Match 'search_next_page_is_post' $searchBar 'method="POST" action="\{\{nextPageUrl\}\}"'
Assert-Match 'search_next_10_pages_is_post' $searchBar 'method="POST" action="\{\{next10pageUrl\}\}"'
Assert-MatchCount 'all_search_arrows_preserve_search_term' $searchBar 'name="searchstring" value="\{\{searchString\}\}"' 4

Write-Output 'RESULT baseline=search pagination loses POST state'
Write-Output 'RESULT modified=search pagination posts searchstring on next/previous page'
exit 0
