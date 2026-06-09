import os
import re

mapping = {
    'Edit': 'Pencil',
    'Grid2x2': 'SquaresFour',
    'LayoutDashboard': 'Columns',
    'PanelLeft': 'Sidebar',
    'PanelsLeftBottom': 'SidebarSimple',
    'Slash': 'Password',
    'ChevronDown': 'CaretDown',
    'ChevronRight': 'CaretRight',
    'ExternalLink': 'ArrowSquareOut',
    'RefreshCw': 'ArrowsClockwise',
    'GripHorizontal': 'DotsSix',
    'GripVertical': 'DotsSixVertical',
    'ChartColumnBig': 'BarChart',
    'PanelTop': 'Browser',
    'Sheet': 'FileText',
    'Settings2': 'SettingsSelectors',
    'LockKeyhole': 'Lock',
    'LogOut': 'SignOut',
    'SquarePen': 'PencilSquare',
    'ListCheck': 'ListChecks',
    'Earth': 'Globe',
    'KeyRound': 'Key',
    'Landmark': 'Bank',
    'Languages': 'Translate',
    'Layers': 'Stack',
    'Link2': 'Link',
    'LogIn': 'SignIn',
    'Search': 'MagnifyingGlass',
    'Send': 'PaperPlaneTilt',
    'Share2': 'ShareNetwork',
    'SquareSlash': 'FileCode',
    'Type': 'TextT',
    'MoreHorizontal': 'DotsThree',
    'AlignEndHorizontal': 'AlignRight',
    'AlertTriangle': 'Warning',
    'Maximize': 'CornersOut',
    'Ellipsis': 'DotsThreeOutline',
    'Menu': 'List',
    'Settings': 'Gear',
    'SunMoon': 'SunDim',
    'BookText': 'BookOpen',
    'LifeBuoy': 'Lifebuoy',
    'ListFilter': 'Funnel',
    'MoreHorizontal': 'DotsThree',
    'Share': 'ShareNetwork',
    'LinkIcon': 'Link'
}

files = [
    'src/app/(main)/MobileNav.tsx',
    'src/app/(main)/SideNav.tsx',
    'src/app/(main)/TopNav.tsx',
    'src/app/(main)/admin/teams/AdminTeamsTable.tsx',
    'src/app/(main)/admin/users/UsersTable.tsx',
    'src/app/(main)/admin/websites/AdminWebsitesTable.tsx',
    'src/app/(main)/boards/BoardDesignButton.tsx',
    'src/app/(main)/boards/BoardEditButton.tsx',
    'src/app/(main)/boards/BoardEntityBadge.tsx',
    'src/app/(main)/boards/[boardId]/BoardEditBody.tsx',
    'src/app/(main)/boards/[boardId]/BoardEditRow.tsx',
    'src/app/(main)/boards/[boardId]/BoardViewHeader.tsx',
    'src/app/(main)/boards/[boardId]/edit/BoardEditPage.tsx',
    'src/app/(main)/boards/boardComponentRegistry.tsx',
    'src/app/(main)/dashboard/DashboardViewHeader.tsx',
    'src/app/(main)/links/LinkEditButton.tsx',
    'src/app/(main)/links/LinkEditForm.tsx',
    'src/app/(main)/links/[linkId]/LinkHeader.tsx',
    'src/app/(main)/pixels/PixelEditButton.tsx',
    'src/app/(main)/pixels/PixelEditForm.tsx',
    'src/app/(main)/pixels/[pixelId]/PixelHeader.tsx',
    'src/app/(main)/pixels/[pixelId]/edit/PixelEditPage.tsx',
    'src/app/(main)/settings/SettingsNav.tsx',
    'src/app/(main)/settings/profile/PasswordChangeButton.tsx',
    'src/app/(main)/teams/TeamLeaveButton.tsx',
    'src/app/(main)/teams/[teamId]/TeamEditForm.tsx',
    'src/app/(main)/teams/[teamId]/TeamMemberEditButton.tsx',
    'src/app/(main)/websites/WebsitesTable.tsx',
    'src/app/(main)/websites/[websiteId]/(reports)/breakdown/BreakdownPage.tsx',
    'src/app/(main)/websites/[websiteId]/WebsiteExpandedMenu.tsx',
    'src/app/(main)/websites/[websiteId]/WebsiteHeader.tsx',
    'src/app/(main)/websites/[websiteId]/WebsiteMenu.tsx',
    'src/app/(main)/websites/[websiteId]/cohorts/CohortEditButton.tsx',
    'src/app/(main)/websites/[websiteId]/segments/SegmentEditButton.tsx',
    'src/app/(main)/websites/[websiteId]/sessions/SessionInfo.tsx',
    'src/app/(main)/websites/[websiteId]/settings/ShareEditButton.tsx',
    'src/app/share/[slug]/[[...path]]/ShareNav.tsx',
    'src/components/common/ErrorMessage.tsx',
    'src/components/common/ExternalLink.tsx',
    'src/components/common/FilterLink.tsx',
    'src/components/common/MultiSelect.tsx',
    'src/components/common/Pager.tsx',
    'src/components/common/Panel.tsx',
    'src/components/hooks/useWebsiteNavItems.tsx',
    'src/components/input/BoardSelect.tsx',
    'src/components/input/MenuButton.tsx',
    'src/components/input/MobileMenuButton.tsx',
    'src/components/input/NavButton.tsx',
    'src/components/input/PanelButton.tsx',
    'src/components/input/PixelSelect.tsx',
    'src/components/input/PreferencesButton.tsx',
    'src/components/input/ProfileButton.tsx',
    'src/components/input/RefreshButton.tsx',
    'src/components/input/ReportEditButton.tsx',
    'src/components/input/SettingsButton.tsx',
    'src/components/input/TeamsButton.tsx',
    'src/components/input/UserButton.tsx',
    'src/components/input/WebsiteDateFilter.tsx',
    'src/components/input/WebsiteFilterButton.tsx',
    'src/components/metrics/MetricsTable.tsx',
    'src/components/share/SimpleShareEditButton.tsx'
]

for file_path in files:
    full_path = os.path.join('/workspaces/codespaces-blank/umami', file_path)
    if not os.path.exists(full_path):
        continue
    
    with open(full_path, 'r') as f:
        content = f.read()
    
    new_content = content
    
    # Handle imports specifically to avoid replacing things we shouldn't
    # Search for the import block from '@/components/icons'
    # Use re.DOTALL to handle multi-line imports
    import_match = re.search(r'import \{(.*?)\} from [\'"]@/components/icons[\'"]', new_content, re.DOTALL)
        
    if import_match:
        old_import_block = import_match.group(0)
        icons_str = import_match.group(1)
        
        # Split icons, preserving whitespace/newlines/commas
        parts = re.split(r'(\b\w+\b)', icons_str)
        
        new_parts = []
        for part in parts:
            if part in mapping:
                new_parts.append(mapping[part])
            else:
                new_parts.append(part)
        
        new_icons_str = ''.join(new_parts)
        
        # Special case for MobileNav.tsx Link conflict
        if file_path == 'src/app/(main)/MobileNav.tsx' and 'Link' in new_icons_str:
            new_icons_str = new_icons_str.replace('Link', 'Link as LinkIcon')
        
        new_import_block = old_import_block.replace(icons_str, new_icons_str)
        new_content = new_content.replace(old_import_block, new_import_block)

        # Now replace usages in the rest of the file
        for old_name, new_name in mapping.items():
            if old_name == new_name:
                continue
            
            # Use word boundaries for replacement
            # Skip if it's already updated (though regex should handle it)
            new_content = re.sub(rf'\b{old_name}\b', new_name, new_content)
            
        # Special case for MobileNav usages of Link icon
        if file_path == 'src/app/(main)/MobileNav.tsx':
            # This is tricky because Link is also used for navigation
            # But the icon usage in MobileNav looks like: { icon: <Link />, ... }
            # Wait, if I changed the import to 'Link as LinkIcon', I should only change the icon usage.
            # In MobileNav: icon: <Link /> -> icon: <LinkIcon />
            new_content = new_content.replace('icon: <Link />', 'icon: <LinkIcon />')

    if new_content != content:
        with open(full_path, 'w') as f:
            f.write(new_content)
        print(f"Updated: {file_path}")
    else:
        print(f"No changes: {file_path}")
