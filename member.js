function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: 'm'
        }
    };
}